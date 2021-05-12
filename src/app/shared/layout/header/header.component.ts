import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { EasingLogic } from 'ngx-page-scroll-core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  public myEasing: EasingLogic = (t: number, b: number, c: number, d: number): number => {
    // easeInOutExpo easing
    if (t === 0) {
      return b;
    }
    if (t === d) {
      return b + c;
    }
    if ((t /= d / 2) < 1) {
      return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
    }

    return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
  }

  goToHome() {
    this.router.navigate(["./"]);
  }

  goToOfferte() {
    this.router.navigate(["./offerte"]);
  }
}
