// import { Component, HostListener } from '@angular/core';
// import { RouterOutlet } from '@angular/router';

// // Angular Material modules
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatListModule } from '@angular/material/list';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { CommonModule } from '@angular/common';
// // import { RouterOutlet_1 as RouterOutlet } from "../../node_modules/@angular/router/router_module.d";

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   templateUrl: './app.html',
//   styleUrls: ['./app.scss'],
//   imports: [
//     CommonModule,
//     MatSidenavModule,
//     MatListModule,
//     MatExpansionModule,
//     MatToolbarModule,
//     MatIconModule,
//     MatButtonModule,
// ]
// })
// export class App {
//   isMobile = false;

//   constructor() {
//     this.checkScreen();
//   }

//   @HostListener('window:resize')
// checkScreen() {
//   if (typeof window !== 'undefined') {
//     this.isMobile = window.innerWidth < 768;
//   }
// }

// }
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./shared/header/header";
import { Footer } from "./shared/footer/footer";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
}

