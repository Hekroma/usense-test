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
  protected readonly pagination: WritableSignal<Pagination[] | null> = signal(null);

  private readonly querySubject = new BehaviorSubject<SearchTerm>(null);

  protected readonly itemsList: Signal<LocalResult[]> = toSignal(
    this.querySubject.pipe(
      switchMap((term) =>
        term
          ? this.searchService.search(term).pipe(
              map((res) => {
                this.isLoading.set(false);
                this.hasSearched.set(true);
                this.pagination.set(
                  res.pagination
                    ? paginationConverterFunction(res.serpapi_pagination)
                    : null,
                );
                return res.local_results ?? [];
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
      .subscribe((value) => {
        const query = value?.trim() ?? '';
        if (query) {
          this.querySubject.next({ query });
        } else {
          this.hasSearched.set(false);
          this.pagination.set(null);
          this.querySubject.next(null);
        }
      });
  }

  protected moveToPage(link: string) {
    const url = new URL(link);
    this.querySubject.next({
      query: url.searchParams.get('q')!,
      start: url.searchParams.get('start') ?? undefined,
    });
  }
}
