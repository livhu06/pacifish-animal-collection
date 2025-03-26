import { Routes } from '@angular/router';

import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./home/home.page').then( m => m.HomePage),
        children: [
            {
                path: 'collection',  
                loadComponent: () => import('./home/collection/collection.page').then( m => m.CollectionPage)
            },
            {
                path: 'quizzes',
                loadComponent: () => import('./home/quizzes/quizzes.page').then( m => m.QuizzesPage)
            },
            {
                path: 'badges',
                loadComponent: () => import('./home/badges/badges.page').then( m => m.BadgesPage)
            },
            {
                path: 'profile',
                loadComponent: () => import('./home/profile/profile.page').then( m => m.ProfilePage)
            },

        ]
      },
      {
        path: 'notifications',
        loadComponent: () => import('./notifications/notifications.page').then( m => m.NotificationsPage)
      },
      {
        path: 'scan',
        loadComponent: () => import('./scan/scan.page').then( m => m.ScanPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./settings/settings.page').then( m => m.SettingsPage)
      }
    ]
  },
];
