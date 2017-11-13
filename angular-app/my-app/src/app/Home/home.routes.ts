import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';

const homeRoutes: Routes = [
    { path: 'Home', component: HomeComponent, children: []},
];

export const homeRouting = RouterModule.forChild(homeRoutes);