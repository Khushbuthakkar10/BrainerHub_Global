import { Component } from '@angular/core';
import { LayoutService } from '../../service/layout/layout-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
 config: any;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.headerConfig$.subscribe(cfg => this.config = cfg);
  }
}
