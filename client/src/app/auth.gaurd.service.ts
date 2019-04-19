import { Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router} from '@angular/router';


@Injectable()

export class RouterGaurdService implements CanActivate {
    token: String;

    constructor(private _router: Router) {}
    canActivate(route: ActivatedRouteSnapshot): boolean {
        this.token = localStorage.getItem('TOKEN_NAME');
        console.log('>my token>>>', this.token);
        if (this.token == null) {
            this._router.navigate(['/login']);
            return false;
        }
        return true;
    }
}
