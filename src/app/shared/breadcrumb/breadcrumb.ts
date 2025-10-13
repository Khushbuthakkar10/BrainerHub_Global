import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

export interface BreadcrumbConfig {
  breadcrumbs: BreadcrumbItem[];
  backgroundImage?: string;
  logo?: string;
  title?: string;
  subtitle?: string;
}

@Component({
  selector: 'app-breadcrumb',
  imports: [CommonModule, RouterLink, MatIcon],
  templateUrl: './breadcrumb.html',
  styleUrl: './breadcrumb.scss'
})
export class Breadcrumb {
  // Individual inputs for flexibility
  @Input() breadcrumbs: BreadcrumbItem[] = [];
  @Input() backgroundImage?: string;
  @Input() logo?: string;
  @Input() title?: string;
  @Input() subtitle?: string;
  
  // Alternative: Single config object input
  @Input() set config(value: BreadcrumbConfig | undefined) {
    if (value) {
      this.breadcrumbs = value.breadcrumbs || [];
      this.backgroundImage = value.backgroundImage;
      this.logo = value.logo;
      this.title = value.title;
      this.subtitle = value.subtitle;
    }
  }

  get hasHeroSection(): boolean {
    return !!(this.backgroundImage || this.logo || this.title);
  }
}
