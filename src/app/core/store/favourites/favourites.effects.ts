import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap, withLatestFrom } from 'rxjs';
import { LocalStorageService } from '@core/services/local-storage.service';
import { FAVOURITES_STORAGE_KEY } from './favourites.state';
import { FavouritesActions } from './favourites.actions';
import { selectFavouriteItems } from './favourites.selectors';

export const persistFavouritesEffect = createEffect(
  (
    actions$ = inject(Actions),
    store = inject(Store),
    localStorageService = inject(LocalStorageService),
  ) =>
    actions$.pipe(
      ofType(FavouritesActions.addFavourite, FavouritesActions.removeFavourite),
      withLatestFrom(store.select(selectFavouriteItems)),
      tap(([, favouriteItems]) =>
        localStorageService.set(FAVOURITES_STORAGE_KEY, favouriteItems),
      ),
    ),
  { functional: true, dispatch: false },
);
