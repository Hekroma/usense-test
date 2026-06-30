import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { favouriteItemsCount } from '@core/store/favourites/favourites.selectors';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  private readonly store = inject(Store);

  public readonly favouriteCounter = this.store.selectSignal(favouriteItemsCount);
}
