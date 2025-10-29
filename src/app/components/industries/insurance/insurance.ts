import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, Inject, PLATFORM_ID, ViewChild } from '@angular/core';
import { Breadcrumb } from '../../../shared/breadcrumb/breadcrumb';
import { MatTabsModule } from '@angular/material/tabs';
import { CommonModule, isPlatformBrowser } from '@angular/common';

interface Testimonial {
  id: number;
  name: string;
  designation: string;
  company: string;
  rating: number;
  image: string;
  quote: string;
}

@Component({
  selector: 'app-insurance',
  imports: [Breadcrumb,MatTabsModule,CommonModule],
  templateUrl: './insurance.html',
  styleUrl: './insurance.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Insurance {

   @ViewChild('testimonialsSwiper', { static: false }) testimonialsSwiper!: ElementRef;

breadcrumbConfig = {
    breadcrumbs: [
      { label: 'Home', link: '/' },
      { label: 'Industries', link: '/industries' },
      { label: 'insurance' }
    ],
    backgroundImage: '/assets/images/insurance.svg',
    logo: '/assets/images/insurance-logo.svg',
    title: 'Insurance',
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

  ngOnInit() {
    this.updateContent(0);
  }

  onTabChange(event: any) {
    this.updateContent(event.index);
  }

  updateContent(index: number) {
    this.selectedTabContent = this.tabs[index].content;
  }
    testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Matt Neal',
      designation: 'Global Head of Energy and Resources',
      company: 'Endava',
      rating: 4,
      image: 'assets/images/deep.png',
      quote: 'Alongside our product and engineering heritage, we operate at the forefront of technology to help our customers plan, implement and pivot to meet their opportunities and challenges.'
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      designation: 'Chief Technology Officer',
      company: 'Tech Corp',
      rating: 5,
      image: 'assets/images/deep.png',
      quote: 'Working with this team has been transformative for our business. Their expertise in cutting-edge technology and commitment to excellence is unmatched.'
    },
    {
      id: 3,
      name: 'Michael Chen',
      designation: 'VP of Innovation',
      company: 'Digital Solutions',
      rating: 5,
      image: 'assets/images/deep.png',
      quote: 'The level of professionalism and technical knowledge they bring to every project is outstanding. They have helped us achieve our digital transformation goals.'
    },
    {
      id: 4,
      name: 'Emily Rodriguez',
      designation: 'Director of Engineering',
      company: 'Future Systems',
      rating: 4,
      image: 'assets/images/deep.png',
      quote: 'Their people-centric approach combined with technical excellence makes them the perfect partner for any enterprise looking to innovate and grow.'
    }
  ];

  private swiperInitialized = false;
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
  }

  ngOnDestroy(): void {
    this.destroySwiper();
  }

  private async initializeSwiper(): Promise<void> {
    if (!this.isBrowser) return;
    if (this.swiperInitialized) return;

    await customElements.whenDefined('swiper-container');

    const swiperEl = this.testimonialsSwiper?.nativeElement;
    if (!swiperEl) {
      console.warn('❌ testimonialsSwiper element not found.');
      return;
    }

    const swiperParams = {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '#testimonialsNext',
        prevEl: '#testimonialsPrev',
      },
      pagination: false,
      grabCursor: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      speed: 800,
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 1, spaceBetween: 30 },
        1024: { slidesPerView: 1, spaceBetween: 30 },
      }
    };

    Object.assign(swiperEl, swiperParams);

    swiperEl.initialize();

    this.swiperInitialized = true;
    console.log('✅ Swiper initialized successfully:', swiperEl.swiper);
  }

  private destroySwiper(): void {
    if (!this.isBrowser) return;

    const swiperEl = this.testimonialsSwiper?.nativeElement;
    if (swiperEl?.swiper) {
      try {
        swiperEl.swiper.destroy(true, true);
        this.swiperInitialized = false;
        console.log('🧹 Swiper destroyed');
      } catch (error) {
        console.error('Error destroying testimonials swiper:', error);
      }
    }
  }

  getStarArray(rating: number): boolean[] {
    return Array(5).fill(false).map((_, index) => index < rating);
  }

  trackByTestimonialId(index: number, testimonial: Testimonial): number {
    return testimonial.id;
  }
}
