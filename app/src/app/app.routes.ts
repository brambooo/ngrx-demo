import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'clients',
    loadChildren: () =>
      import('./domains/clients/').then((m) => m.FEATURE_CLIENTS_ROUTES),
  },

  //     children: [
  //       {
  //         path: 'clients',
  //         loadChildren: () =>
  //           import('./domains/clients/').then((m) => m.FEATURE_CLIENTS_ROUTES),
  //       },
  //     ],
  //   },
];
