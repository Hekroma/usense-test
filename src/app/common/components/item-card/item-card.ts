import { Component, input, InputSignal } from '@angular/core';
import { LocalResult } from '@common/models/search-result.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'item-card',
  imports: [NgOptimizedImage],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss',
})
export class ItemCard {
  public item: InputSignal<LocalResult> = input.required();
}
