import { createActionGroup, props } from '@ngrx/store';
import { LocalResult } from '@common/models/search-result.model';

export const FavouritesActions = createActionGroup({
  source: 'Favourites',
  events: {
    'Add Favourite': props<{ item: LocalResult }>(),
    'Remove Favourite': props<{ item: LocalResult }>(),
  },
});
