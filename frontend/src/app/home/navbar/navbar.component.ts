import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/authentication/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.checkSession();
  }

  checkSession() {
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout().subscribe(() => {
      this.isLoggedIn = false;
      sessionStorage.removeItem('email'); 
      this.router.navigate(['']);
    }, error => {
      console.error('Logout error:', error);
    });
  }
}
