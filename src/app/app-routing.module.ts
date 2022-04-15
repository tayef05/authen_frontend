import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthguardGuard } from './guard/authguard.guard';
import { AuthComponent } from './home/auth/auth.component';
import { DashboardComponent } from './home/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LoginComponent },
      { path: 'register', component: AuthComponent },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthguardGuard],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
