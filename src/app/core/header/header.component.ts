import { Component, inject } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {

  router = inject(Router);

  redirectHome() {
    console.log('navegou');
    this.router.navigate(['home']);
  }
}
