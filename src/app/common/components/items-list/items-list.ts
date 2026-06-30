import { Component, input } from '@angular/core';
import { ItemCard } from '@common/components/item-card/item-card';
import { LocalResult } from '@common/models/search-result.model';

@Component({
  selector: 'app-items-list',
  imports: [ItemCard],
  templateUrl: './items-list.html',
  styleUrl: './items-list.scss',
})
export class ItemsList {
  public itemsList = input.required<LocalResult[]>();
}
