import { Routes, RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

const studentsRoutes: Routes = [
    {
        path: '',
        redirectTo: 'Portfolio',
        pathMatch: 'full'
    },
    { path: 'Portfolio', component: PortfolioComponent, children: []},
];

export const portfolioRouting = RouterModule.forChild(studentsRoutes);