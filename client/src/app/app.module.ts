import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { CustomerFormComponent } from './registerForm/customerForm.component';
import { FormRegisterService } from './registerForm/form-register.server';
import { FormLoginService } from './loginForm/form-login.server';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterGaurdService } from './auth.gaurd.service';
import { ProfileService } from './profile/profile.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerFormComponent,
    LoginFormComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [
    FormRegisterService,
    FormLoginService,
    RouterGaurdService,
    ProfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
