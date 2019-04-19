import { Component } from '@angular/core';
import {Register} from './register.model';
import { NgForm} from '@angular/forms';
import { Router } from '@angular/router';

import { FormRegisterService } from './form-register.server';

@Component({
    selector: 'app-form',
    templateUrl: './customerForm.component.html'
})

export class CustomerFormComponent {

    customModel = new Register('John', 'a@a.com', '1234');
    constructor(private _registerPost: FormRegisterService,
                private _router: Router) {}

    FirstToUpper(value: string): void {
        if (value.length > 0) {
            this.customModel.name = value.charAt(0).toUpperCase() + value.slice(1);
        } else {
            this.customModel.name = value;
        }
    }

    submitForm(form: NgForm): void {
         this._registerPost.postEmployee(form.value)
            .subscribe((res) => this._router.navigate(['/profile']));
    }
}
