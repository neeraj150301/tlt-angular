import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  {
    path: 'tlt',
    loadComponent: () =>
      import('./tlt-home/tlt-home.component').then((m) => m.TltHomeComponent),
  },
  {
    path: 'admin',
    children: [
      {
        path: '',
        redirectTo: 'admin-dash',
        pathMatch: 'full',
      },
      {
        path: 'admin-dash',
        loadComponent: () =>
          import('./tlt-home/tlt-admin/admin-dash/admin-dash.component').then(
            (m) => m.AdminDashComponent
          ),
      },
      {
        path: 'admin-um',
        loadComponent: () =>
          import('./tlt-home/tlt-admin/admin-userm/admin-userm.component').then(
            (m) => m.AdminUsermComponent
          ),
      },
      {
        path: 'admin-yard',
        loadComponent: () =>
          import('./tlt-home/tlt-admin/admin-yard/admin-yard.component').then(
            (m) => m.AdminYardComponent
          ),
      },
      {
        path: 'admin-rm',
        loadComponent: () =>
          import('./tlt-home/tlt-admin/admin-rm/admin-rm.component').then(
            (m) => m.AdminRmComponent
          ),
      },
    ],
  },

  {
    path: 'rms',
    children: [
      {
        path: '',
        redirectTo: 'rms-viewrm',
        pathMatch: 'full',
      },
      {
        path: 'rms-viewrm',
        loadComponent: () =>
          import('./tlt-home/tlt-rms/rms-viewrm/rms-viewrm.component').then(
            (m) => m.RmsViewrmComponent
          ),
      },
      {
        path: 'rms-addrm',
        loadComponent: () =>
          import('./tlt-home/tlt-rms/rms-addrm/rms-addrm.component').then(
            (m) => m.RmsAddrmComponent
          ),
      },
      {
        path: 'rms-items',
        children: [
          {
            path: '',
            redirectTo: 'rms-viewItems',
            pathMatch: 'full',
          },
          {
            path: 'rms-viewItems',
            loadComponent: () =>
              import('./tlt-home/tlt-rms/rms-items/rms-view-items/rms-view-items.component').then(
                (m) => m.RmsViewItemsComponent
              ),
          },
          {
            path: 'rms-addItems',
            loadComponent: () =>
              import('./tlt-home/tlt-rms/rms-items/rms-add-items/rms-add-items.component').then(
                (m) => m.RmsAddItemsComponent
              ),
          },
        ]
      },
      {
        path: 'rms-issues',
        loadComponent: () =>
          import('./tlt-home/tlt-rms/rms-issues/rms-issues.component').then(
            (m) => m.RmsIssuesComponent
          ),
      },
      {
        path: 'rms-qr',
        loadComponent: () =>
          import('./tlt-home/tlt-rms/rms-qr/rms-qr.component').then(
            (m) => m.RmsQrComponent
          ),
      },
    ],
  },
];
