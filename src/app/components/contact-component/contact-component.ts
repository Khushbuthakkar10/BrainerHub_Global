import { Component, OnDestroy, OnInit } from '@angular/core';
import { Breadcrumb } from '../../shared/breadcrumb/breadcrumb';
import { LayoutService } from '../../service/layout/layout-service';

@Component({
  selector: 'app-contact-component',
  imports: [Breadcrumb],
  templateUrl: './contact-component.html',
  styleUrl: './contact-component.scss'
})
export class ContactComponent implements OnInit, OnDestroy{
  constructor(private layoutService: LayoutService,){

  }
  ngOnInit(): void {
    this.layoutService.setLayout({ showCTA: false, showFooter: true });
  }

 breadcrumbConfig = {
    breadcrumbs: [
      { label: 'Home', link: '/' },
      { label: 'Contact Us', link: '/contact' },
  
    ],
    backgroundImage: '/assets/images/contact-banner.svg',
    logo: '/assets/images/energy_Resources.svg',
    title: 'Contact',
  };
  ngOnDestroy(): void {
    this.layoutService.setLayout({ showCTA: true, showFooter: true });
  }
}
