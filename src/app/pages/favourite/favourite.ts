import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { toSignal } from '@angular/core/rxjs-interop';
import { selectFavouriteItems } from '@core/store/favourites/favourites.selectors';
import { ItemsList } from '@common/components/items-list/items-list';

@Component({
  selector: 'app-favourite',
  imports: [ItemsList],
  templateUrl: './favourite.html',
  styleUrl: './favourite.scss',
})
export class Favourite {
  private readonly store = inject(Store);

  public itemsList = toSignal(this.store.select(selectFavouriteItems), {
    initialValue: [],
  });
}
