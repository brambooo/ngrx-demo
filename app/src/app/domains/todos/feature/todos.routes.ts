import { Routes } from '@angular/router';
import { TodosPageComponent } from './todos-page.component';

export const FEATURE_TODOS_ROUTES: Routes = [
  {
    path: '',
    component: TodosPageComponent,
  },
];
