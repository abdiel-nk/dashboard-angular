import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Content } from './pages/content/content';
import { Analytics } from './pages/analytics/analytics';
import { Comments } from './pages/comments/comments';

export const routes: Routes = [
    {
        path : '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path :'dashboard',
        component: Dashboard,
    },
    {
        path: 'content',
        component: Content,
    },
    {
        path: 'analytics',
        component: Analytics,
    },
    {
        path: 'comments'   ,
        component: Comments,
    }
];
