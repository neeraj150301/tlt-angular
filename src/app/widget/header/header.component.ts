import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule,CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isAdminRouteActive: boolean = false;
  isNavbarOpen = false;

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
}