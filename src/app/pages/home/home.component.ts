import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  catchError,
  debounceTime,
  defer,
  distinctUntilChanged,
  of,
  switchMap,
  tap,
} from 'rxjs';
import { SearchService } from '@core/services/search.service';
import { ItemCard } from '@common/components/item-card/item-card';
import { NgClass } from '@angular/common';
import { Item } from '@common/models/search-result.model';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule, ItemCard, NgClass],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  private readonly searchService = inject(SearchService);

  protected readonly searchControl = new FormControl('');
  protected readonly isLoading = signal(false);
  protected readonly hasError = signal(false);
  protected readonly hasSearched = signal(false);

  protected readonly searchValue = toSignal(this.searchControl.valueChanges, {
    initialValue: '',
  });

  protected readonly itemsList = toSignal(
    this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap((query) => {
        const trimmed = query?.trim() ?? '';
        console.log(trimmed);
        return defer(() =>
          trimmed
            ? this.searchService.search(trimmed).pipe(
                tap(() => {
                  this.isLoading.set(false);
                  this.hasSearched.set(true);
                }),
                catchError(() => {
                  this.isLoading.set(false);
                  this.hasError.set(true);
                  return of([] as Item[]);
                }),
              )
            : this._emptySearch(),
        );
      }),
    ),
    { initialValue: [] as Item[] },
  );

  private _emptySearch() {
    this.isLoading.set(false);
    this.hasSearched.set(false);
    return of([] as Item[]);
  }
}
