import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { retry } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  constructor(private auth: AuthService, private router: Router) {}
  registerUser(myForm: any) {
    const url: string = 'http://127.0.0.1:8000/auth/users/';
    console.log(myForm.value);

    const myFormValue = myForm.value;
    this.auth
      .register(url, myFormValue)
      .pipe(retry(2))
      .subscribe({
        next: (data) => {
          console.log(data);
          myForm.resetForm();
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
