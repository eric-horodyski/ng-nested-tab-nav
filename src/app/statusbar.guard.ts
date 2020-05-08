import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class StatusbarGuard implements CanActivate {

  private statusBarColor: 'green' | 'yellow' = 'yellow';

  canActivate(_next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (state.url.includes('/tabs/') && this.statusBarColor !== 'green') {
      this.updateStatusBarColor('green');
    } else if (!state.url.includes('/tabs/') && this.statusBarColor === 'green') {
      this.updateStatusBarColor('yellow');
    }

    console.log(`StatusbarGuard: ${state.url}`);
    return true;
  }

  updateStatusBarColor(color: 'green' | 'yellow') {
    this.statusBarColor = color;
    console.log(`StatusbarGuard: Update stausbar color to ${this.statusBarColor}`)
  }

}