import { Component } from '@angular/core';
import { faClose, faBars } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  mobileActive = false;

  faClose = faClose;
  faBars = faBars;

  toggleMobileMenu() {
    this.mobileActive = !this.mobileActive;
  }
}
