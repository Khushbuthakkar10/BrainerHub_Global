import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
   showCTA$ = new BehaviorSubject<boolean>(true);
  showFooter$ = new BehaviorSubject<boolean>(true);

  setLayout(options: { showCTA?: boolean; showFooter?: boolean }) {
    if (options.showCTA !== undefined) this.showCTA$.next(options.showCTA);
    if (options.showFooter !== undefined) this.showFooter$.next(options.showFooter);
  }
}
