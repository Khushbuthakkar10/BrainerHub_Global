import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'energy-and-resources', loadComponent: () => import('./components/industries/energy-and-resources/energy-and-resources').then(m => m.EnergyAndResources) },
];
