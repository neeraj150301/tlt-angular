import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment';
import { AuthService } from '../auth/auth.service';
import { UserInterface } from '../common/interfaces/user.insterface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor() { }
  authService = inject(AuthService);
  http = inject(HttpClient);

  currentUser = signal<UserInterface | null>(null)
  userList = signal<UserInterface[]>([])
  
  getUser(userId: string): Observable<any> {
    return this.http.get(`${environment.apiBaseUrl}/api/auth/users/${userId}`);
  }
  
  getTltUsers(){
  var user = this.http.get<any>(`${environment.apiBaseUrl}/api/auth/users`);
    return user;
  }
  // removeUser(){
  //   return this.http.get(`${environment.apiBaseUrl}/api/auth/users/${userId}`);

  // }
  
  setCurrentUser(userId: string) {
    this.getUser(userId).subscribe(
      value => {
        const user: UserInterface = {
          _id: value._id ?? "",
          phoneNumber: value.phoneNumber ?? "",
          fullName: value.fullName ?? "",
          isActive: value.isActive ?? false,
          isDefaultPin: value.isActive ?? false,
          isSuperAdmin: value.isSuperAdmin ?? false,
          fcmToken: value.fcmToken ?? "",
          devices: value.devices ?? [],
          deviceHistory: value.deviceHistory ?? [],
          apps: value.apps ?? [],
          createdAt: value.createdAt ?? new Date(),
          updatedAt: value.updatedAt ?? new Date(),
        };
        this.currentUser.set(user);
        console.log('helo',this.currentUser())
      }, error => {
        console.error(error.error);
      }
    );
  }

  logout() {
    this.currentUser.set(null);
    this.authService.logout();
  }
}
