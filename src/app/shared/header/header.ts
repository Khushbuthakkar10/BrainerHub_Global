import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    RouterLink
],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @ViewChild('drawer') drawer!: MatDrawer;

  isMobile = false;

  @HostListener('window:resize')
  checkScreen() {
    if (typeof window !== 'undefined') {
      this.isMobile = window.innerWidth < 520;
    }
  }

  ngOnInit() {
    this.checkScreen();
  }
  isSearchActive = false;

  onSearchClick(event: Event) {
    // Only toggle when clicking SVG or the container, not input
    this.isSearchActive = !this.isSearchActive;
  }

  @HostListener('document:click', ['$event'])
  handleOutsideClick(event: Event) {
    const target = event.target as HTMLElement;
    if (!target.closest('.mainHeader-search')) {
      this.isSearchActive = false;
    }
  }
}
