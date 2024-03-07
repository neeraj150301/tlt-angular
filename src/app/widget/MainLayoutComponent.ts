import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  template: `
    <header class="text-white flex items-center justify-between">
      <app-header></app-header>
    </header>
    <main class="px-3 py-3">
      <router-outlet></router-outlet>
    </main>
    <!-- <app-side-bar></app-side-bar> -->
  `,
   imports: [CommonModule, RouterOutlet, HeaderComponent, RouterLink, SideBarComponent, HttpClientModule]
})
export class MainLayoutComponent {}
