import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { NotificationsPage } from './notifications/notifications.page';
import { ScanPage } from './scan/scan.page';
import { SettingsPage } from './settings/settings.page';
import { HomePage } from './home/home.page';
import { BadgesPage } from './home/badges/badges.page';
import { CollectionPage } from './home/collection/collection.page';
import { ProfilePage } from './home/profile/profile.page';
import { QuizzesPage } from './home/quizzes/quizzes.page';

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
        children: [
          {
            path: '',
            component: HomePage
          },
          {
            path: 'badges',
            component: BadgesPage
          },
          {
            path: 'collection',
            component: CollectionPage
          },
          {
            path: 'profile',
            component: ProfilePage
          },
          {
            path: 'quizzes',
            component: QuizzesPage
          }
        ]
      },
      {
        path: 'notifications',
        component: NotificationsPage
      },
      {
        path: 'scan',
        component: ScanPage
      },
      {
        path: 'settings',
        component: SettingsPage
      }
    ]
  }
];
