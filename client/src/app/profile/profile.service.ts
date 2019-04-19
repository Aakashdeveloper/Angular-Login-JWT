import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()

export class ProfileService {
    usersUrl = 'http://localhost:5000/api/auth/users';

    constructor(private _http: HttpClient) {}

    getUsers(): Observable<any[]> {
        return this._http.get<any[]>( `${this.usersUrl}`);
    }
}
