import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { LoginLayoutComponent } from './widget/LoginLayoutComponent';
import { MainLayoutComponent } from './widget/MainLayoutComponent';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
  },
  // {
  //   path: 'login',
  //   loadComponent: () =>
  //     import('./auth/login/login.component').then((m) => m.LoginComponent),
  // },
  // {
  //   path: 'register',
  //   loadComponent: () =>
  //     import('./auth/register/register.component').then(
  //       (m) => m.RegisterComponent
  //     ),
  // },
  {
    path: '',
    component: LoginLayoutComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: RegisterComponent,
      },
    ],
  },
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      // Add your main page routes here
      {
        path: 'tlt',
        loadComponent: () =>
          import('./tlt-home/tlt-home.component').then((m) => m.TltHomeComponent),
      },
      {
        path: 'admin',
        // loadComponent: () => import('./app.component').then(m => m.AppComponent),
        canActivate: [AuthGuard],
    
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
            // loadComponent: () =>
            //   import('./tlt-home/tlt-admin/admin-userm/admin-userm.component').then(
            //     (m) => m.AdminUsermComponent
            //   ),
          
              children: [
                {
                  path: '',
                  redirectTo: 'admin-viewUser',
                  pathMatch: 'full',
                },
                {
                  path: 'admin-viewUser',
                  loadComponent: () =>
                    import(
                      './tlt-home/tlt-admin/admin-userm/admin-view-user/admin-view-user.component'
                    ).then((m) => m.AdminViewUserComponent),
                },
                {
                  path: 'admin-addUser',
                  loadComponent: () =>
                    import(
                      './tlt-home/tlt-admin/admin-userm/admin-add-user/admin-add-user.component'
                    ).then((m) => m.AdminAddUserComponent),
                },
              ],
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
        canActivate: [AuthGuard],
    
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
                  import(
                    './tlt-home/tlt-rms/rms-items/rms-view-items/rms-view-items.component'
                  ).then((m) => m.RmsViewItemsComponent),
              },
              {
                path: 'rms-addItems',
                loadComponent: () =>
                  import(
                    './tlt-home/tlt-rms/rms-items/rms-add-items/rms-add-items.component'
                  ).then((m) => m.RmsAddItemsComponent),
              },
            ],
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
    ]
  }

];
