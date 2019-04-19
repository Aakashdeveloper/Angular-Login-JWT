import { Injectable} from '@angular/core';
import { Login} from './login.model';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class FormLoginService {

    private url = 'http://localhost:5000/api/auth/login';
    private userinfo = 'http://localhost:5000/api/auth/me';

    constructor(private _http: HttpClient) {
    }

    postEmployee(user: Login) {
        console.log('getting in service', user);
        return this._http.post(this.url , user);
    }

    getUserRole(token) {
        console.log('getting in getUserRole service', token.toString());
        localStorage.setItem('TOKEN_NAME', token);
        return this._http.get(this.userinfo, {headers: {'x-access-token': token}});
    }

      getToken() {
        return localStorage.getItem('TOKEN_NAME');
      }
}
