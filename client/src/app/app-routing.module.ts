import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerFormComponent } from './registerForm/customerForm.component';
import { LoginFormComponent } from './loginForm/loginForm.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterGaurdService } from './auth.gaurd.service';
import { RegisterGaurdService } from './auth.register.gaurd.service';




const routes: Routes = [
    {path: 'register', canActivate: [RegisterGaurdService], component: CustomerFormComponent},
    {path: 'profile', canActivate: [RouterGaurdService], component: ProfileComponent},
    {path: 'login', component: LoginFormComponent},
    {path: '', redirectTo: 'login', pathMatch: 'full'}

];

@NgModule({
    imports: [ RouterModule.forRoot(routes)],
    providers: [RouterGaurdService, RegisterGaurdService],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
