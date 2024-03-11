import { Component, inject } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { UserInterface } from '../../../../common/interfaces/user.insterface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment';

@Component({
  selector: 'app-admin-view-user',
  standalone: true,
  imports: [],
  templateUrl: './admin-view-user.component.html',
  styleUrl: './admin-view-user.component.css',
})
export class AdminViewUserComponent {
  constructor(private userService: UserService) {}
  showSuccessMessage =  false;
  showResetPinSuccessMessage =  false;

  http = inject(HttpClient);
  showWarning = false;
  showResetWarning = false;

  removeUser!: UserInterface;
  resetPinUser!: UserInterface;

  Users: any[] = [];
  ngOnInit() {
    this.fetchtltUsers();
  }
  fetchtltUsers() {
    this.userService.getTltUsers().subscribe((users) => {
      this.Users = users.filter((user: { apps: string | string[] }) =>
        user.apps.includes('tlt')
      );
      // console.log(this.Users);
    });
  }
  preRemoveTltUser(user: UserInterface) {
    this.removeUser = user;
    this.showWarning = true;
  }

  preResetPin(user: UserInterface){
    this.resetPinUser = user;

    this.showResetWarning = true;
  }

  resetPin(user: UserInterface){
    this.http.patch(`${environment.apiBaseUrl}/api/auth/users/reset/${user._id}`,user._id).subscribe((res) => {
      // console.log(res);
    });
    this.showResetWarning = false;
    this.showResetPinSuccessMessage = true;
    setTimeout(() => {
      this.showResetPinSuccessMessage = false;
    },2000);
  }

  removeTltUser(user: UserInterface) {
    user.apps = user.apps.filter((app) => app !== 'tlt');
    this.http
      .patch(`${environment.apiBaseUrl}/api/auth/users/apps/${user._id}`, user)
      .subscribe((res) => {
        // console.log(res);
      });
      this.showWarning = false;
    this.showSuccessMessage=true;
    setTimeout(() => {
      this.showSuccessMessage = false;
    },2000);

      this.fetchtltUsers();

  }
}
