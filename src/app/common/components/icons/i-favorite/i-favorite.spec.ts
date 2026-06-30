import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IFavorite } from './i-favorite';

describe('IFavorite', () => {
  let component: IFavorite;
  let fixture: ComponentFixture<IFavorite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IFavorite],
    }).compileComponents();

    fixture = TestBed.createComponent(IFavorite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
