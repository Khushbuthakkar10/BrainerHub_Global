import { Component, OnInit } from '@angular/core';
import { Breadcrumb } from '../../../shared/breadcrumb/breadcrumb';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-leadership',
  imports: [Breadcrumb,MatTabsModule,CommonModule],
  templateUrl: './leadership.html',
  styleUrl: './leadership.scss'
})
export class Leadership implements OnInit{

  ngOnInit(): void {
     this.updateContent(0);
  }

breadcrumbConfig = {
    breadcrumbs: [
      { label: 'Home', link: '/' },
      { label: 'who-we-are'},
      { label: 'leadership' ,link: '/leadership' }
    ],
    backgroundImage: '/assets/images/leadership-banner.svg',
    // logo: '/assets/images/insurance-logo.svg',
    title: 'Leadership',
  };
  selectedTabIndex = 0;
  selectedTabContent: any;

  tabs = [
    {
      label: 'Automotive',
      content: {
        image: 'assets/images/tab1.svg',
        badge: 'Article',
        readTime: '4 min to read',
        title: 'The Era of Ecosystems and the Rise of Open Insurance',
        description: 'From the connected car to smart infrastructure, insurance will play a key role...',
        list: [
          'Data management and analytics',
          'Telematics and third-party selection',
          'Proof of concept',
          'Continuous delivery and improvement'
        ],
        linkText: 'Check out what else we do in automotive'
      }
    },
    {
      label: 'Payments',
      content: {
        image: 'assets/images/tab1.svg',
        badge: 'Article',
        readTime: '6 min to read',
        title: 'Payments Industry Digital Transformation',
        description: 'We help accelerate payment modernization...',
        list: [
          'Fraud management',
          'API-first architecture',
          'Cloud modernization'
        ],
        linkText: 'See more payment solutions'
      }
    },
    {
      label: 'Embedded Services',
      content: {
        image: 'assets/images/tab1.svg',
        badge: 'Insight',
        readTime: '5 min to read',
        title: 'Smart Infrastructure and IoT Evolution',
        description: 'IoT innovations drive operational efficiency...',
        list: [
          'Smart energy monitoring',
          'IoT deployment',
          'Real-time analytics'
        ],
        linkText: 'Explore embedded services'
      }
    }
  ];
 onTabChange(event: any) {
    this.updateContent(event.index);
  }
   updateContent(index: number) {
    this.selectedTabContent = this.tabs[index].content;
  }
}
