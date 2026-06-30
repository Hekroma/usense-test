import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { routes } from './app.routes';
import { favouritesReducer } from '@core/store/favourites/favourites.reducer';
import { persistFavouritesEffect } from '@core/store/favourites/favourites.effects';
import {
  FAVOURITES_STORAGE_KEY,
  initialFavouritesState,
} from '@core/store/favourites/favourites.state';

function loadFavouritesFromStorage() {
  try {
    const raw = localStorage.getItem(FAVOURITES_STORAGE_KEY);
    return raw ? { items: JSON.parse(raw) } : initialFavouritesState;
  } catch {
    return initialFavouritesState;
  }
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(),
    provideStore(
      { favourites: favouritesReducer },
      { initialState: { favourites: loadFavouritesFromStorage() } },
    ),
    provideEffects({ persistFavouritesEffect }),
  ],
};
