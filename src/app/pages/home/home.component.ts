import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  inject,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  catchError,
  debounceTime,
  defer,
  distinctUntilChanged,
  map,
  of,
  switchMap,
} from 'rxjs';
import { SearchService } from '@core/services/search.service';
import { ItemCard } from '@common/components/item-card/item-card';
import { LocalResult } from '@common/models/search-result.model';
import { paginationConverterFunction } from '@common/components/functions/pagination-converter.function';
import { Pagination } from '@common/models/base.models';
import { ItemsList } from '@common/components/items-list/items-list';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, ItemCard, ItemsList],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly searchService = inject(SearchService);
  private readonly _destroyRef = inject(DestroyRef);
  protected readonly searchControl = new FormControl('');
  protected readonly isLoading: WritableSignal<boolean> = signal(false);
  protected readonly hasError: WritableSignal<boolean> = signal(false);
  protected readonly hasSearched: WritableSignal<boolean> = signal(false);
  protected readonly pagination: WritableSignal<Pagination[] | null> =
    signal(null);

  protected readonly itemsList: Signal<LocalResult[]> = toSignal(
    this.searchControl.valueChanges.pipe(
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((query) => {
        const trimmed = query?.trim() ?? '';
        return defer(() =>
          trimmed
            ? this.searchService.search(trimmed).pipe(
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
            : this._emptySearch(),
        );
      }),
      takeUntilDestroyed(this._destroyRef),
    ),
    { initialValue: [] as LocalResult[] },
  );

  private _emptySearch() {
    this.isLoading.set(false);
    this.hasSearched.set(false);
    this.pagination.set([]);
    return of([] as LocalResult[]);
  }
}
