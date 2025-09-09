import { Component } from '@angular/core';
import { LayoutService } from '../../service/layout/layout-service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterModule,CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
 config: any;

  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.footerConfig$.subscribe(cfg => this.config = cfg);
  }
}
