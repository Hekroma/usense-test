import { Component, input, InputSignal } from '@angular/core';
import { LocalResult } from '@common/models/search-result.model';
import { NgOptimizedImage } from '@angular/common';
import { CommentIcon } from '@common/components/icons/comment-icon/comment-icon';
import { LocationIcon } from '@common/components/icons/location-icon/location-icon';

@Component({
  selector: 'item-card',
  imports: [NgOptimizedImage, CommentIcon, LocationIcon],
  templateUrl: './item-card.html',
  styleUrl: './item-card.scss',
})
export class ItemCard {
  public item: InputSignal<LocalResult> = input.required();
}
