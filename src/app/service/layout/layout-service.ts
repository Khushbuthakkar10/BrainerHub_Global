import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
   private headerConfig = new BehaviorSubject<any>(null);
  headerConfig$ = this.headerConfig.asObservable();

  private footerConfig = new BehaviorSubject<any>(null);
  footerConfig$ = this.footerConfig.asObservable();

  setHeader(config: any) {
    this.headerConfig.next(config);
  }

  setFooter(config: any) {
    this.footerConfig.next(config);
  }
}
