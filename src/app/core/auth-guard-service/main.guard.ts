import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MAIN_PATHS, AUTH_PATH } from 'src/app/constants';

@Injectable({
    providedIn: 'root'
})
export class MainGuard implements CanActivate {
    constructor(
        private router: Router
    ) {
    }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigateByUrl(`/${AUTH_PATH.SIGN_IN}`);
            return false;
        } else {
            return true;
        }
    }


    isAuthenticated(): boolean {
        const token = localStorage.getItem('accessToken');
        if (token) {
            return true;
        } else {
            return false;
        }
    }
}