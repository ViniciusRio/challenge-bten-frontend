import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { AuthenticationComponent } from './layouts/authentication/authentication.component';
import { AccountService } from './services/account/account.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './http-interceptors';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CreateAccountComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule
  ],
  providers: [
    AccountService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
