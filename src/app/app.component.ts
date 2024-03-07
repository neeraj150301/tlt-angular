import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./widget/header/header.component";
import { BottomNavComponent } from "./widget/bottom-nav/bottom-nav.component";
import { SideBarComponent } from "./widget/side-bar/side-bar.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import { UserService } from './services/user.service';
import { AuthService } from './auth/auth.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, HeaderComponent, RouterLink, BottomNavComponent, SideBarComponent, HttpClientModule]
})
export class AppComponent {
  authService = inject(AuthService);

  title = 'tlt-angular';
  isloginRouteActive: boolean = false;
  constructor(private router: Router,private userService: UserService) {
   
  }
  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isloginRouteActive = this.router.url.startsWith('/login');
    });
  }
}
