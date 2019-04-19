import { Injectable} from '@angular/core';
import { Register} from './register.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormRegisterService {

    private url = 'http://localhost:5000/api/auth/register';

    constructor(private _http: HttpClient) {
    }

    postEmployee(employee: Register) {
        return this._http.post(this.url , employee);
    }

}
