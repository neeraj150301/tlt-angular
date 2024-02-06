import { CommonModule } from '@angular/common';
import { Component, signal, HostListener } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css',
})
export class SideBarComponent {
  isRmsRouteActive: boolean = false;
  isDropdownOpen: boolean = false;
  isExpanded = signal(false);
  isSideBarOpen: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isRmsRouteActive = this.router.url.startsWith('/rms');
    });
  }

  @HostListener('document:click', ['$event'])
  clickOutside(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (
      !target.closest ||
      (!target.closest('#default-sidebar') && this.isSideBarOpen)
    ) {
      this.isSideBarOpen = false;
    }
  }

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
    this.isExpanded.set(!this.isExpanded());
  }
  toogleSideBar() {
    this.isSideBarOpen = !this.isSideBarOpen;
  }
}
