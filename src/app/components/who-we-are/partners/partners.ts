import { Component } from '@angular/core';
import { Breadcrumb } from '../../../shared/breadcrumb/breadcrumb';

@Component({
  selector: 'app-partners',
  imports: [Breadcrumb],
  templateUrl: './partners.html',
  styleUrl: './partners.scss'
})
export class Partners {
breadcrumbConfig = {
    breadcrumbs: [
      { label: 'Home', link: '/' },
      { label: 'who-we-are',link:'/'},
      { label: 'partner' ,link: '/partner' }
    ],
    backgroundImage: '/assets/images/partner-banner.svg',
    // logo: '/assets/images/insurance-logo.svg',
    title: 'Partner',
    subtitle:'From idea to production, we help carriers, brokers and technology providers accelerate insurance innovation through successful delivery of agile and digital transformation projects globally.'
  };
}
