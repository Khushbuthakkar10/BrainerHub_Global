import { Component,Input } from '@angular/core';
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
  @Input() showCTA? = true
  @Input() showFooter? = true
  constructor(private layoutService: LayoutService) {}

  ngOnInit() {
    this.layoutService.showCTA$.subscribe(v => this.showCTA = v);
  this.layoutService.showFooter$.subscribe(v => this.showFooter = v);
  }
}
