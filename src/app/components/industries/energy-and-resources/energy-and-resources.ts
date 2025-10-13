import { Component } from '@angular/core';
import { Breadcrumb } from "../../../shared/breadcrumb/breadcrumb";

@Component({
  selector: 'app-energy-and-resources',
  imports: [Breadcrumb],
  templateUrl: './energy-and-resources.html',
  styleUrl: './energy-and-resources.scss'
})
export class EnergyAndResources {
 breadcrumbConfig = {
    breadcrumbs: [
      { label: 'Home', link: '/' },
      { label: 'Industries', link: '/industries' },
      { label: 'Energy and Resources' }
    ],
    backgroundImage: '/assets/images/energy-and-resources.svg',
    logo: '/assets/images/energy-icon.svg',
    title: 'Energy and Resources',
    // subtitle: 'Powering sustainable solutions for tomorrow'
  };
}
