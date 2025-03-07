import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },

  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },

  {
    path: 'scan',
    loadChildren: () => import('./pages/tabs/scan/scan.module').then(m => m.ScanPageModule)
  },

  {
  path: 'notifications',
    loadChildren: () => import('./pages/tabs/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },

  {
  path: 'settings',
  loadChildren: () => import('./pages/tabs/settings/settings.module').then(m => m.SettingsPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
