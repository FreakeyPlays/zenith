import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'meals',
    loadComponent: () =>
      import('./views/meals-view/meals-view.component').then(
        c => c.MealsViewComponent
      ),
  },
  {
    path: 'workouts',
    loadComponent: () =>
      import('./views/workouts-view/workouts-view.component').then(
        c => c.WorkoutsViewComponent
      ),
  },
  {
    path: 'mindset',
    loadComponent: () =>
      import('./views/mindset-view/mindset-view.component').then(
        c => c.MindsetViewComponent
      ),
  },
  {
    path: 'insights',
    loadComponent: () =>
      import('./views/insights-view/insights-view.component').then(
        c => c.InsightsViewComponent
      ),
  },
  { path: '', redirectTo: '/meals', pathMatch: 'full' },
  //   { path: '**', component: PageNotFoundComponent }
];
