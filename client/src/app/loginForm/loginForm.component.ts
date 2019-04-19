import { Component } from '@angular/core';
import {Login} from './login.model';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { FormLoginService } from './form-login.server';

@Component({
    selector: 'app-form',
    templateUrl: './loginForm.component.html'
})

export class LoginFormComponent {

    customModel = new Login('a@a.com', '1234');

    constructor(private _loginPost: FormLoginService,
                private _router: Router) {}


    loginForm(form: NgForm): void {
        console.log( '>>>', form.value);
         this._loginPost.postEmployee(form.value)
            .subscribe((res) =>
                        this._loginPost.getUserRole(res['token'])
                            .subscribe((response) => (this.validateUserRole(response['role']))));
    }

    validateUserRole(usertype): void {
        localStorage.setItem('ROLE_TYPE', usertype);
        this._router.navigate(['/profile']);
    }
}
