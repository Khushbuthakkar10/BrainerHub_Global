import { 
  AfterViewInit, 
  Component, 
  CUSTOM_ELEMENTS_SCHEMA, 
  ElementRef, 
  ViewChild,
  OnDestroy,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { LayoutService } from '../../service/layout/layout-service';
import { Footer } from "../../shared/footer/footer";
import { Header } from "../../shared/header/header";

interface NewsCard {
  id: number;
  image: string;
  category: string;
  title: string;
  link: string;
}

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [Footer, Header, CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  @ViewChild('newsSwiper', { static: false }) swiperRef!: ElementRef;
  @ViewChild('teamSwiper', { static: false }) teamSwiperRef!: ElementRef;

  newsCards: NewsCard[] = [
    {
      id: 1,
      image: 'about-img.png',
      category: 'News',
      title: 'Create real value with leading capabilities',
      link: '/news/1'
    },
    {
      id: 2,
      image: 'about-img.png',
      category: 'News',
      title: 'Innovation in Digital Transformation',
      link: '/news/2'
    },
    {
      id: 3,
      image: 'about-img.png',
      category: 'News',
      title: 'Future of Enterprise Solutions',
      link: '/news/3'
    },
    {
      id: 4,
      image: 'about-img.png',
      category: 'Insights',
      title: 'Leveraging the Human Advantage for Business Transformation',
      link: '/insights/1'
    },
    {
      id: 5,
      image: 'about-img.png',
      category: 'Insights',
      title: 'How Digital Acceleration Drives Growth',
      link: '/insights/2'
    },
    {
      id: 6,
      image: 'about-img.png',
      category: 'Insights',
      title: 'Technology Trends Shaping Tomorrow',
      link: '/insights/3'
    }
  ];

  teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      image: 'about-img.png',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Innovation',
      image: 'about-img.png',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Director of Engineering',
      image: 'about-img.png',
    },
    {
      id: 4,
      name: 'David Kim',
      role: 'VP of Product',
      image: 'about-img.png',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Head of Design',
      image: 'CTA-img.png',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Chief Solutions Architect',
      image: 'about-img.png'
    }
  ];

  private swiperInitialized = false;
  private teamSwiperInitialized = false;
  private isBrowser: boolean;

  constructor(
    private layoutService: LayoutService,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    this.initializeSwiper();
    this.layoutService.setLayout({ showCTA: true, showFooter: true });
  }

  ngAfterViewInit(): void {
    this.initializeSwiper();
    this.initializeTeamSwiper();
  }

  ngOnDestroy(): void {
    this.destroySwiper();
    this.destroyTeamSwiper();
  }

  private initializeSwiper(): void {
    if (!this.isBrowser) return;
    setTimeout(() => {
      const swiperEl = this.swiperRef?.nativeElement;
      
      if (!swiperEl || this.swiperInitialized) return;

      const swiperParams = {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        navigation: {
          nextEl: '#newsNext',
          prevEl: '#newsPrev',
        },
        pagination: false,
        grabCursor: true,
        breakpoints: {
          0: { 
            slidesPerView: 1,
            spaceBetween: 20 
          },
          768: { 
            slidesPerView: 2,
            spaceBetween: 24 
          },
          1024: { 
            slidesPerView: 3,
            spaceBetween: 30 
          }
        }
      };

      Object.assign(swiperEl, swiperParams);
      swiperEl.initialize();
      this.swiperInitialized = true;
    }, 0);
  }

  private destroySwiper(): void {
    if (!this.isBrowser) return;
    
    if (this.swiperRef?.nativeElement?.swiper) {
      try {
        this.swiperRef.nativeElement.swiper.destroy(true, true);
      } catch (error) {
        console.error('Error destroying swiper:', error);
      }
    }
  }

private initializeTeamSwiper(): void {
  if (!this.isBrowser) return;

  setTimeout(() => {
    const swiperEl = this.teamSwiperRef?.nativeElement;
    if (!swiperEl || this.teamSwiperInitialized) return;

    const swiperParams = {
      slidesPerView: 5,              
      spaceBetween: 0,
      centeredSlides: true,         
      loop: true,                   
      grabCursor: true,
      slideToClickedSlide: true,     
      speed: 1000,                  
      autoplay: {
        delay: 2000,                 
        disableOnInteraction: false, 
      },
      navigation: {
        nextEl: '#teamNext',
        prevEl: '#teamPrev',
      },
      pagination: false,
      breakpoints: {
        0: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          centeredSlides: true,
        },
        1024: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      },
    };

    Object.assign(swiperEl, swiperParams);
    swiperEl.initialize();
    this.teamSwiperInitialized = true;
  }, 0);
}




  private destroyTeamSwiper(): void {
    if (!this.isBrowser) return;
    
    if (this.teamSwiperRef?.nativeElement?.swiper) {
      try {
        this.teamSwiperRef.nativeElement.swiper.destroy(true, true);
      } catch (error) {
        console.error('Error destroying team swiper:', error);
      }
    }
  }

  navigateToNews(card: NewsCard, event?: Event): void {
    if (event) {
      event.stopPropagation();
    }
    this.router.navigate([card.link]);
  }

  exploreNews(card: NewsCard, event: Event): void {
    event.stopPropagation();
    this.router.navigate([card.link]);
  }

  navigateToPreviousCard(event: Event): void {
    event.stopPropagation();
    if (this.swiperRef?.nativeElement?.swiper) {
      this.swiperRef.nativeElement.swiper.slidePrev();
    }
  }

  navigateToNextCard(event: Event): void {
    event.stopPropagation();
    if (this.swiperRef?.nativeElement?.swiper) {
      this.swiperRef.nativeElement.swiper.slideNext();
    }
  }

  trackByCardId(index: number, card: NewsCard): number {
    return card.id;
  }

  trackByMemberId(index: number, member: TeamMember): number {
    return member.id;
  }
}