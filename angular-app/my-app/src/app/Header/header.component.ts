import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'dab-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  constructor(private router: Router) {
    // console.log(router);
  }

  homeClick() {
    this.router.navigate(['Home']);
  }
  portfolioClick() {
    this.router.navigate(['Portfolio']);
  }
}