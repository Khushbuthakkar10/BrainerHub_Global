import { Component } from '@angular/core';
import { LayoutService } from '../../service/layout/layout-service';
import { Footer } from "../../shared/footer/footer";
import { Header } from "../../shared/header/header";

@Component({
  selector: 'app-home-component',
  imports: [Footer, Header],
  templateUrl: './home-component.html',
  styleUrl: './home-component.scss'
})
export class HomeComponent {
 constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.setHeader({
      title: 'Welcome to BrainerHub',
      image: 'assets/images/home-header.png',
      breadcrumbs: []
    });

    this.layoutService.setFooter({
      showImage: true,
      imageUrl: 'assets/images/footer-home.png',
      links: [
        { label: 'Privacy', url: '/privacy' },
        { label: 'Contact', url: '/contact' }
      ]
    });
  }
}
