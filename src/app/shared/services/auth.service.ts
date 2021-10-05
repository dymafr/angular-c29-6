import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Credentials, User } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  public fetchCurrentUser(): Observable<User> {
    return this.http.get<User>(
      'https://dyma-staging.fr:5001/api/auth/currentuser'
    );
  }

  public inscription(user: User): Observable<any> {
    return this.http.post('https://dyma-staging.fr:5001/api/user', user);
  }

  public connexion(credentials: Credentials): Observable<User> {
    return this.http.post<User>(
      'https://dyma-staging.fr:5001/api/auth/connexion',
      credentials
    );
  }

  public logout(): Observable<any> {
    return this.http.delete('https://dyma-staging.fr:5001/api/auth/logout');
  }
}
