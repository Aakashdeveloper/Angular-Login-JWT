import { Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';


@Injectable()

export class RegisterGaurdService implements CanActivate {
    token: String;
    user: String;

    constructor(private _router: Router) {}
    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.token = localStorage.getItem('TOKEN_NAME');
        this.user = localStorage.getItem('ROLE_TYPE');
        console.log('>my token>>>', this.token);
        if (this.token == null) {
            this._router.navigate(['/login']);
            return false;
        }
        if (this.token !== null && this.user === 'admin') {
            return true;
        }
    }
}
