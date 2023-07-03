import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  isLoggedIn = false;

  constructor(private apiService: AuthService,private router: Router) {}

  ngOnInit() {
    this.isLoggedIn = this.apiService.isLoggedIn();
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }

    const loginData = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    };

    this.apiService.login(loginData).subscribe(
      (response) => {
        this.isLoggedIn = true;
        this.router.navigate(['/showProducts']);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }

}
