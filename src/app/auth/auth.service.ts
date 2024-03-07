// import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
// import { Injectable, inject, signal } from '@angular/core';
// import { AuthInterface } from '../common/interfaces/auth.insterface';
// import { Observable, catchError, throwError } from 'rxjs';
// import { environment } from '../environment';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {

//   constructor() { }

//   http = inject(HttpClient);
//   localStorageKey = 'auth';

//   currentAuthData = signal<AuthInterface | undefined | null>(undefined);

//   login(phoneNumber: string, pin: string): Observable<any> {
//     return this.http.post(`${environment.apiBaseUrl}/api/auth/login`, { phoneNumber, pin });
//   }

//   saveAuthToStorage(auth: AuthInterface) {
//     localStorage.setItem(this.localStorageKey, JSON.stringify(auth))
//   }

//   getAuthFromStorage() {
//     const auth = localStorage.getItem(this.localStorageKey);
//     return auth ? JSON.parse(auth) as AuthInterface : null;
//   }

//   logout(){
//     console.log('clicked3');
    
//     localStorage.removeItem(this.localStorageKey);
    
//   }

// }
import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../environment';
import { AuthInterface } from '../common/interfaces/auth.insterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStorageKey = 'auth';
  currentAuthData = signal<AuthInterface | undefined | null>(undefined);

  constructor(private http: HttpClient) { }

  login(phoneNumber: string, pin: string): Observable<any> {
    return this.http.post(`${environment.apiBaseUrl}/api/auth/login`, { phoneNumber, pin });
  }

  saveAuthToStorage(auth: AuthInterface) {
    localStorage.setItem(this.localStorageKey, JSON.stringify(auth));
  }

  getAuthFromStorage(): AuthInterface | null {
    const auth = localStorage.getItem(this.localStorageKey);
    return auth ? JSON.parse(auth) as AuthInterface : null;
  }
 
  logout() {
    localStorage.removeItem(this.localStorageKey);
  }

}
