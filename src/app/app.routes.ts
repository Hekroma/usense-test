import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then((c) => c.Home),
  },
  {
    path: 'favorite',
    loadComponent: () => import('./pages/favourite/favourite').then((c) => c.Favourite),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
