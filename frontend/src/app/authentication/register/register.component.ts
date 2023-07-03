import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registrationForm: FormGroup;
  email: FormControl;
  firstName: FormControl;
  lastName: FormControl;
  password: FormControl;
  confirmPassword: FormControl;

  constructor(private apiService: AuthService, private router: Router) {
    this.email = new FormControl('', Validators.required);
    this.firstName = new FormControl('', Validators.required);
    this.lastName = new FormControl('', Validators.required);
    this.password = new FormControl('', Validators.required);
    this.confirmPassword = new FormControl('', Validators.required);

    this.registrationForm = new FormGroup({
      email: this.email,
      firstName: this.firstName,
      lastName: this.lastName,
      password: this.password,
      confirmPassword: this.confirmPassword,
    });
  }

  ngOnInit(): void {}
  register() {
    if (this.password.value === this.confirmPassword.value) {
      const registrationData = {
        email: this.email.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        password: this.password.value,
      };

      this.apiService.register(registrationData).subscribe(
        () => {
          this.router.navigate(['/login']);
        },
        (error) => {
          console.error('Login error:', error);
        }
      );
    }
  }
}
