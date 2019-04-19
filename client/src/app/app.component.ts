import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'templateform';
  constructor(private _router: Router) {}
  logoutuser(): void {
    localStorage.removeItem('TOKEN_NAME');
    this._router.navigate(['/login']);
    alert('successfull logout');
  }

}
