import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  constructor(private api: AuthService, private router: Router) {}

  ngOnInit(): void {}
  logout(): void {
    this.api.logout();
    this.router.navigate(['/']);
  }
}
