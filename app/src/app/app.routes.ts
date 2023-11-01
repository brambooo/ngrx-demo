import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'klanten',
    loadChildren: () =>
      import('./domains/clients/').then((m) => m.FEATURE_CLIENTS_ROUTES),
  },
  {
    path: 'facturen',
    loadChildren: () =>
      import('./domains/invoices/').then((m) => m.FEATURE_INVOICES_ROUTES),
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./domains/todos/').then((m) => m.FEATURE_TODOS_ROUTES),
  },
];
