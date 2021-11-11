import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { 
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard]
   },
  {
    path: '', 
    component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, },
      { path: 'create-account', component: CreateAccountComponent },


    ]
    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
