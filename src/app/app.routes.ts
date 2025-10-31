import { Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'energy-and-resources', loadComponent: () => import('./components/industries/energy-and-resources/energy-and-resources').then(m => m.EnergyAndResources) },
     { path: 'insurance', loadComponent: () => import('./components/industries/insurance/insurance').then(m => m.Insurance) },
     { path: 'contact', loadComponent: () => import('./components/contact-component/contact-component').then(m => m.ContactComponent) },
     { path: 'leadership', loadComponent: () => import('./components/who-we-are/leadership/leadership').then(m => m.Leadership) },
     { path: 'partner', loadComponent: () => import('./components/who-we-are/partners/partners').then(m => m.Partners) },
];
