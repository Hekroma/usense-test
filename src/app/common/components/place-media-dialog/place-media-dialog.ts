import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgOptimizedImage } from '@angular/common';
import { Observable } from 'rxjs';
import { PlaceDetailsService } from '@core/services/place-details.service';
import {
  PlacePhoto,
  PlacePhotosResponse,
  PlaceReview,
  PlaceReviewsResponse,
} from '@common/models/place-details.model';

export type PlaceMediaMode = 'photos' | 'reviews';

@Component({
  selector: 'place-media-dialog',
  imports: [NgOptimizedImage],
  templateUrl: './place-media-dialog.html',
  styleUrl: './place-media-dialog.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(keydown.escape)': 'onEscape()',
  },
})
export class PlaceMediaDialog implements AfterViewInit {
  public mode = input.required<PlaceMediaMode>();
  public placeId = input.required<string>();
  public placeTitle = input.required<string>();
  public closed = output<void>();

  private readonly placeDetails = inject(PlaceDetailsService);
  private readonly destroyRef = inject(DestroyRef);
  private readonly closeButton =
    viewChild<ElementRef<HTMLButtonElement>>('closeButton');
  private readonly backButton =
    viewChild<ElementRef<HTMLButtonElement>>('backButton');

  protected readonly isLoading = signal(true);
  protected readonly errorMessage = signal<string | null>(null);
  protected readonly photos = signal<PlacePhoto[]>([]);
  protected readonly reviews = signal<PlaceReview[]>([]);
  protected readonly selectedPhoto = signal<PlacePhoto | null>(null);

  ngAfterViewInit(): void {
    this.closeButton()?.nativeElement.focus();
    this.load();
  }

  protected openPhoto(photo: PlacePhoto): void {
    this.selectedPhoto.set(photo);
    queueMicrotask(() => this.backButton()?.nativeElement.focus());
  }

  protected closePhoto(): void {
    this.selectedPhoto.set(null);
    queueMicrotask(() => this.closeButton()?.nativeElement.focus());
  }

  protected onEscape(): void {
    if (this.selectedPhoto()) {
      this.closePhoto();
      return;
    }
    this.closed.emit();
  }

  private load(): void {
    const request$: Observable<PlacePhotosResponse | PlaceReviewsResponse> =
      this.mode() === 'photos'
        ? this.placeDetails.getPhotos(this.placeId())
        : this.placeDetails.getReviews(this.placeId());

    request$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe({
      next: (res) => {
        this.isLoading.set(false);
        if (res.error) {
          this.errorMessage.set(res.error);
          return;
        }
        if (this.mode() === 'photos') {
          this.photos.set((res as PlacePhotosResponse).photos ?? []);
        } else {
          this.reviews.set((res as PlaceReviewsResponse).reviews ?? []);
        }
      },
      error: () => {
        this.isLoading.set(false);
        this.errorMessage.set('Something went wrong. Please try again later.');
      },
    });
  }
}
