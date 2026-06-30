import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  switchMap,
} from 'rxjs';
import { SearchService } from '@core/services/search.service';
import { LocalResult } from '@common/models/search-result.model';
import { paginationConverterFunction } from '@common/components/functions/pagination-converter.function';
import { Pagination } from '@common/models/base.models';
import { ItemsList } from '@common/components/items-list/items-list';

type SearchTerm = { query: string; start?: string } | null;

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, ItemsList],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly searchService = inject(SearchService);

  protected readonly searchControl = new FormControl('');
  protected readonly isLoading: WritableSignal<boolean> = signal(false);
  protected readonly hasError: WritableSignal<boolean> = signal(false);
  protected readonly hasSearched: WritableSignal<boolean> = signal(false);
  protected readonly isEmpty: WritableSignal<boolean> = signal(false);
  protected readonly pagination: WritableSignal<Pagination[] | null> = signal(null);

  private readonly querySubject = new BehaviorSubject<SearchTerm>(null);

  protected readonly itemsList: Signal<LocalResult[]> = toSignal(
    this.querySubject.pipe(
      switchMap((term) =>
        term
          ? this.searchService.search(term).pipe(
              map((res) => {
                const results = res.local_results ?? [];
                this.isLoading.set(false);
                this.hasSearched.set(true);
                this.isEmpty.set(results.length === 0);
                this.pagination.set(
                  res.serpapi_pagination
                    ? paginationConverterFunction(res.serpapi_pagination)
                    : null,
                );
                return results;
              }),
              catchError(() => {
                this.isLoading.set(false);
                this.hasError.set(true);
                return of([] as LocalResult[]);
              }),
            )
          : of([] as LocalResult[]),
      ),
    ),
    { initialValue: [] as LocalResult[] },
  );

  constructor() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        takeUntilDestroyed(),
      )
      .subscribe((value) => this._dispatch(value));
  }

  protected onEnter(): void {
    const value = this.searchControl.value;
    this._dispatch(value);
  }

  protected moveToPage(link: string): void {
    const url = new URL(link);
    this._search({
      query: url.searchParams.get('q')!,
      start: url.searchParams.get('start') ?? undefined,
    });
  }

  private _dispatch(value: string | null): void {
    const query = value?.trim() ?? '';
    if (query) {
      this._search({ query });
    } else {
      this.isLoading.set(false);
      this.hasSearched.set(false);
      this.isEmpty.set(false);
      this.pagination.set(null);
      this.querySubject.next(null);
    }
  }

  private _search(term: { query: string; start?: string }): void {
    this.isLoading.set(true);
    this.hasError.set(false);
    this.querySubject.next(term);
  }
}
