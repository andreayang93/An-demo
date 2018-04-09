import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {ContactComponent} from './contact/contact.component';

@Injectable()
export class UnsavedGuard implements CanDeactivate <ContactComponent> {
  canDeactivate(
    component: ContactComponent,
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return window.confirm('未保存，确定离开？');
  }
}
