import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { UserProfileSmallComponent } from "../user-profile-small/user-profile-small.component";

@Component({
    selector: 'app-header',
    standalone: true,
    templateUrl: './header.component.html',
    styleUrl: './header.component.css',
    imports: [RouterLink, RouterModule, CommonModule, UserProfileSmallComponent]
})
export class HeaderComponent {
  isAdminRouteActive: boolean = false;
  isNavbarOpen = false;
  isUserOpen = signal<boolean>(false);

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isAdminRouteActive = this.router.url.startsWith('/admin');
    });
  }

  toggleNavbar() {
    this.isNavbarOpen = !this.isNavbarOpen;
  }
  QRscanner() {
    
    // this.rawMaterialService.rawmaterial.set(rawMaterial);
    this.router.navigate(['./rms/rms-qr']);
  }
  toggleUser(){
    this.isUserOpen.update(value => {
      return !value
    });
  }
}