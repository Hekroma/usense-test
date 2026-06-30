import { Component, computed, input } from '@angular/core';

type StarType = 'full' | 'half' | 'empty';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.html',
  styleUrl: './star-rating.scss',
})
export class StarRating {
  rating = input.required<number>();

  protected readonly stars = computed<StarType[]>(() => {
    const value = Math.max(0, Math.min(5, this.rating()));
    return Array.from({ length: 5 }, (_, i) => {
      if (value >= i + 1) return 'full';
      if (value >= i + 0.5) return 'half';
      return 'empty';
    });
  });
}
