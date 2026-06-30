import { LocalResult } from '@common/models/search-result.model';

export interface FavouritesState {
  items: LocalResult[];
}

export const initialFavouritesState: FavouritesState = {
  items: [],
};

export const FAVOURITES_STORAGE_KEY = 'favourites';
