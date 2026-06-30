import { inject, Injectable } from '@angular/core';
import { LocalStorageService } from '@core/services/local-storage.service';
import { LocalResult } from '@common/models/search-result.model';

const KEY_NAME = 'favourite_places';
@Injectable({ providedIn: 'root' })
export class StorageService {
  private readonly localStorage = inject(LocalStorageService);
}
