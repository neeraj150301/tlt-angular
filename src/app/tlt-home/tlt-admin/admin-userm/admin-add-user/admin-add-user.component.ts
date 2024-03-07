import { Component } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { SearchBarComponent } from "../../../../widget/search-bar/search-bar.component";
import { FormsModule } from '@angular/forms';
import { UserfilterPipe } from '../../../../common/userfilter.pipe';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment';
import { UserInterface } from '../../../../common/interfaces/user.insterface';

@Component({
    selector: 'app-admin-add-user',
    standalone: true,
    templateUrl: './admin-add-user.component.html',
    styleUrl: './admin-add-user.component.css',
    imports: [SearchBarComponent,FormsModule,UserfilterPipe]
})
export class AdminAddUserComponent {

  showSuccessMessage: boolean = false;
  showUserList: boolean = false;
  hideUserList: boolean = false;
  selectedUserNO!: string;
  selectedUserName!: string;
  selectedUserId!: string;

  constructor(private userService: UserService , private http: HttpClient) {}
  user!: UserInterface;
  Users: any[] = [];
  searchQuery: string = '';

  ngOnInit() {
    this.fetchtltUsers();
  }
  fetchtltUsers() {
    this.userService.getTltUsers().subscribe((users) => {
      this.Users = users;
    });
}

showUsersList() {
  this.showUserList = !this.showUserList;
}
selectedUser(user: any){ 
  this.selectedUserNO = user.phoneNumber;
  this.selectedUserName = user.fullName;
  this.selectedUserId = user._id!;
  this.showUsersList();
  this.hideUserList = true;
  this.user = user;
  }
  addUser() {
    if (!this.user.apps.includes('tlt')) {
      this.user.apps.push('tlt');
    }
    this.http.patch(
      `${environment.apiBaseUrl}/api/auth/users/apps/${this.selectedUserId}`,
      this.user
    )
    .subscribe((res) => {
      // console.log(res);
    });
    this.showSuccessMessage=true;
    this.hideUserList = false;
    setTimeout(() => {
      this.showSuccessMessage = false;
    }, 2000);
    }
}
