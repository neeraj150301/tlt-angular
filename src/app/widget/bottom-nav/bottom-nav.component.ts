import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css'
})
export class BottomNavComponent {
  constructor(private router: Router) {}

  navToDash() {
    this.router.navigateByUrl('/admin-dash'); 
    
  }
  navToYs() {
    this.router.navigateByUrl('/admin-yard');
  }
  navToUm() {
    this.router.navigateByUrl('/admin-um');
  }
  navToRm() {
    this.router.navigateByUrl('/admin-rm');
  }
}
