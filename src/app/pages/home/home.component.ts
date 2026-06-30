import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  OnInit,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  catchError,
  debounceTime,
  distinctUntilChanged,
  map,
  of,
  Subject,
  switchMap,
  tap,
} from 'rxjs';
import { SearchService } from '@core/services/search.service';
import { LocalResult } from '@common/models/search-result.model';
import { paginationConverterFunction } from '@common/components/functions/pagination-converter.function';
import { Pagination } from '@common/models/base.models';
import { ItemsList } from '@common/components/items-list/items-list';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, ItemsList],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home implements OnInit {
  private readonly searchService = inject(SearchService);
  private readonly _destroyRef = inject(DestroyRef);
  protected readonly searchControl = new FormControl('');
  protected readonly isLoading: WritableSignal<boolean> = signal(false);
  protected readonly hasError: WritableSignal<boolean> = signal(false);
  protected readonly hasSearched: WritableSignal<boolean> = signal(false);
  protected readonly pagination: WritableSignal<Pagination[] | null> =
    signal(null);
  private readonly querySubject: Subject<{ query: string; start?: string }> =
    new Subject();

  protected readonly itemsList: Signal<LocalResult[]> = toSignal(
    this._createSearchSubscription(),
    // this.searchControl.valueChanges.pipe(
    //   debounceTime(800),
    //   distinctUntilChanged(),
    //   switchMap((query) => {
    //     const trimmed = query?.trim() ?? '';
    //     return defer(() =>
    //       trimmed ? this.querySubject.next(trimmed) : this._emptySearch(),
    //     );
    //   }),
    //   takeUntilDestroyed(this._destroyRef),
    // ),
    { initialValue: [] as LocalResult[] },
  );

  ngOnInit() {
    this._controlSubscription();
  }

  private _emptySearch() {
    this.isLoading.set(false);
    this.hasSearched.set(false);
    this.pagination.set([]);
    return of([] as LocalResult[]);
  }

  protected moveToPage(link: string) {
    const url = new URL(link);
    const params = url.searchParams;
    this.querySubject.next({
      query: params.get('q')!,
      start: params.get('start')!,
    });
  }

  private _createSearchSubscription() {
    return this.querySubject.pipe(
      switchMap((term) =>
        this.searchService.search(term).pipe(
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
        ),
      ),
    );
  }

  private _controlSubscription() {
    this.searchControl.valueChanges
      .pipe(
        debounceTime(800),
        distinctUntilChanged(),
        tap((term) => {
          const query = term?.trim() ?? '';
          query ? this.querySubject.next({ query }) : this._emptySearch();
        }),
        takeUntilDestroyed(this._destroyRef),
      )
      .subscribe();
  }
}
