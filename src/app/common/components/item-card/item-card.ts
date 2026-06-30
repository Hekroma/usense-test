import {
  Component,
  DestroyRef,
  inject,
  input,
  InputSignal,
} from '@angular/core';
import { LocalResult } from '@common/models/search-result.model';
import { NgOptimizedImage } from '@angular/common';
import { CommentIcon } from '@common/components/icons/comment-icon/comment-icon';
import { LocationIcon } from '@common/components/icons/location-icon/location-icon';
import { StarRating } from '@common/components/star-rating/star-rating';
import { FavoriteIcon } from '@common/components/icons/favorite-icon/favorite-icon';
import { Store } from '@ngrx/store';
import { FavouritesActions } from '@core/store/favourites/favourites.actions';
import { selectIsFavourite } from '@core/store/favourites/favourites.selectors';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { switchMap } from 'rxjs';
import { toObservable } from '@angular/core/rxjs-interop';

@Component({
  selector: 'item-card',
  imports: [
    NgOptimizedImage,
    CommentIcon,
    LocationIcon,
    StarRating,
    FavoriteIcon,
  ],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss',
})
export class ItemCard {
  public item: InputSignal<LocalResult> = input.required();
  private readonly _destroyRef = inject(DestroyRef);
  private readonly store = inject(Store);

  protected readonly isFavourite = toSignal(
    toObservable(this.item).pipe(
      switchMap((item) =>
        this.store.select(selectIsFavourite(item.provider_id)),
      ),
      takeUntilDestroyed(this._destroyRef),
    ),
    { initialValue: false },
  );

  protected toggleFavouriteState(): void {
    const item = this.item();
    if (this.isFavourite()) {
      this.store.dispatch(FavouritesActions.removeFavourite({ item }));
    } else {
      this.store.dispatch(FavouritesActions.addFavourite({ item }));
    }
  }
}
