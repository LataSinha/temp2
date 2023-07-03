import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AuthService {
  private apiUrl = 'http://localhost:8080';
  private loggedIn = false;

  constructor(private http: HttpClient) {
    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  register(data: any) {
    return this.http.post<any>(`${this.apiUrl}/users/register`, data);
  }

  login(loginData: any) {
    const loginObservable = this.http.post<any>(`${this.apiUrl}/users/login`, loginData);
    sessionStorage.setItem('email', loginData.email);
    localStorage.setItem('isLoggedIn', 'true');
    this.loggedIn = true;
    loginObservable.subscribe(
      (response: any) => {
        const jwtRequest = {
          userId: loginData.email,
          password: loginData.password
        };

        // Request token separately from /token endpoint
        this.http.post<any>(`${this.apiUrl}/token`, jwtRequest).subscribe(
          (tokenResponse: any) => {
            const token = tokenResponse.token;
            localStorage.setItem('token', token);
          },
          (error: any) => {
            console.error('Token request error:', error);
          }
        );
      },
      (error: any) => {
        console.error('Login error:', error);
      }
    );

    return loginObservable;
  }
  
  logout() {
    this.loggedIn = false;
    localStorage.removeItem('email');
    localStorage.setItem('isLoggedIn', 'false');
    return this.http.get<any>(`${this.apiUrl}/users/logout`);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
  
  getUserEmail(): string | null {
    const userEmail = sessionStorage.getItem('email');
    return userEmail !== null ? userEmail : null;
  }

  getToken(): string | null {
    const token = localStorage.getItem('token');
    console.log(token)
    return token !== null ? token : null;
  }

}
