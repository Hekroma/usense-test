import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FavouritesState } from './favourites.state';

const selectFavouritesFeature =
  createFeatureSelector<FavouritesState>('favourites');

export const selectFavouriteItems = createSelector(
  selectFavouritesFeature,
  (s) => s.items,
);

export const selectIsFavourite = (providerId: string) =>
  createSelector(selectFavouriteItems, (items) =>
    items.some((i) => i.provider_id === providerId),
  );

export const favouriteItemsCount = createSelector(
  selectFavouritesFeature,
  (s) => s.items.length,
);
