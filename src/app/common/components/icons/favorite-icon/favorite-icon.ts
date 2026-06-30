import { Component, model } from '@angular/core';

@Component({
  selector: 'favorite-icon',
  imports: [],
  templateUrl: './favorite-icon.html',
  styleUrl: './favorite-icon.scss',
  host: {
    '(click)': 'toggle()',
  },
})
export class FavoriteIcon {
  selected = model(false);

  toggle() {
    this.selected.set(!this.selected());
  }
}
