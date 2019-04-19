import { Component, OnInit } from '@angular/core';
import {FormLoginService} from '../loginForm/form-login.server';
import { ProfileService} from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userinfo;
  allusers: any[];
  token: string;
  constructor(private _FormLoginService: FormLoginService,
              private _profileService: ProfileService) { }

  ngOnInit() {
    this.token = localStorage.getItem('TOKEN_NAME');
    this._FormLoginService.getUserRole(this.token)
      .subscribe((res) => this.userinfo = res);

    this._profileService.getUsers()
      .subscribe((res) =>  this.allusers = res);
  }

}
