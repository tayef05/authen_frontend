import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { UserSignIn } from 'src/app/interface/user-sign-in';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  signInUser(myForm: any) {
    const url: string = 'http://127.0.0.1:8000/auth/jwt/create';
    const myFormValue: UserSignIn = myForm.value;
    let token: any = [];
    console.log(myFormValue);

    this.auth
      .signIn(url, myFormValue)
      .pipe(retry(2))
      .subscribe({
        next: (data) => {
          token = data;
          console.log(token);
          localStorage.setItem('access', token.access);
          localStorage.setItem('refresh', token.refresh);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => {
          console.log(err.message);
        },
      });
  }
  ngOnInit(): void {
    if (this.auth.isLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }
}
