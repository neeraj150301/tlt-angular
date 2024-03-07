import { Component, OnInit, inject, signal } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthInterface } from '../../common/interfaces/auth.insterface';
import { Router, RouterLink } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);
  // toasterService = inject(ToastrService);
  router = inject(Router);
  userService = inject(UserService);

  auth: AuthInterface = { id: "", token: "" };

  isLoading = signal(false);
  isComplete = signal(false);
  isSuccess = signal(false);
  serverMsg = signal("");

  login(event: SubmitEvent) {
    this.isComplete.set(false);
    this.isLoading.set(true);
    this.isSuccess = signal(false);

    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const phoneNumberElement = form.elements.namedItem('phoneNumber') as HTMLInputElement;
    const phoneNumber = `+91${phoneNumberElement.value}`
    const pinElement = form.elements.namedItem('pin') as HTMLInputElement;
    const pin = pinElement.value
    form.reset();
    this.authService.login(phoneNumber, pin).subscribe(value => {      
      this.serverMsg.set(value.msg);
      const authData: AuthInterface = { token: value.token, id: value.id };
      this.authService.saveAuthToStorage(authData);
      this.authService.currentAuthData.set(authData);
      this.userService.setCurrentUser(value.id);
      this.router.navigate(['admin']);
      this.isLoading.set(false);
      this.isComplete.set(true);
      this.isSuccess.set(true);
    }, error => {
      console.log(error.error);
      this.isLoading.set(false);
      this.isComplete.set(true);
      this.serverMsg.set(error.error.message)
    });
  }
}
