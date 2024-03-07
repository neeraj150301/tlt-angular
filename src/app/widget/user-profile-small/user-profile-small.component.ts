import { Component, inject } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-profile-small',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './user-profile-small.component.html',
  styleUrl: './user-profile-small.component.css'
})
export class UserProfileSmallComponent {

  userService = inject(UserService);
  router = inject(Router);
  ngOnInit(): void {
  console.log(this.userService.currentUser())
    
  }
  logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
