import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthguardGuard } from './guard/authguard.guard';
import { AuthComponent } from './home/auth/auth.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { AuthinterceptorInterceptor } from './interceptor/authinterceptor.interceptor';
import { AuthService } from './service/auth.service';
@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
  ],
  imports: [AppRoutingModule, BrowserModule, HttpClientModule, FormsModule],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthinterceptorInterceptor,
      multi: true,
    },
    AuthguardGuard,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
