import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteIcon } from './favorite-icon';

describe('IFavorite', () => {
  let component: FavoriteIcon;
  let fixture: ComponentFixture<FavoriteIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(FavoriteIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
