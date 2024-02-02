import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink,RouterModule,CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {
  isRmsRouteActive: boolean = false;
  isDropdownOpen: boolean = false;
  isExpanded = signal(false);


  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isRmsRouteActive = this.router.url.startsWith('/rms');
    });
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isExpanded.set(!this.isExpanded());
  }
  
}
