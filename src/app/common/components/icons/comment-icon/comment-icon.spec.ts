import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentIcon } from './comment-icon';

describe('CommentIcon', () => {
  let component: CommentIcon;
  let fixture: ComponentFixture<CommentIcon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentIcon],
    }).compileComponents();

    fixture = TestBed.createComponent(CommentIcon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
