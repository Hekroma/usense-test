import { createReducer, on } from '@ngrx/store';
import { FavouritesActions } from './favourites.actions';
import { FavouritesState, initialFavouritesState } from './favourites.state';

export const favouritesReducer = createReducer(
  initialFavouritesState,
  on(FavouritesActions.addFavourite, (state, { item }): FavouritesState => ({
    items: state.items.some((i) => i.provider_id === item.provider_id)
      ? state.items
      : [...state.items, item],
  })),
  on(FavouritesActions.removeFavourite, (state, { item }): FavouritesState => ({
    items: state.items.filter((i) => i.provider_id !== item.provider_id),
  })),
);
