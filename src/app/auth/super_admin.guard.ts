import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { UserService } from '../services/user.service';

export const superAdminGuard: CanActivateFn = (route, state) => {
  const userService = inject(UserService);
  if (userService.currentUser()?.isSuperAdmin) {
    return true;
  } else {
    const router = inject(Router);
    return router.navigate(['/home'])
  }
};
