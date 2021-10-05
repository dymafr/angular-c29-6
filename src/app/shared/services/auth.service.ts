import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import { Credentials, User } from '../interfaces/user.interface';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedin$: ReplaySubject<boolean> = new ReplaySubject(1);
  public user$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(
    null
  );

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
