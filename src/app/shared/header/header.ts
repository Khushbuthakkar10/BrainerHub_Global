import { Component, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDrawer, MatDrawerContainer, MatDrawerContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule
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
}
