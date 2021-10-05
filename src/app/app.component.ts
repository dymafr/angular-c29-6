import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public isLoggedin$: Observable<boolean> =
    this.authService.isLoggedin$.asObservable();

  public logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigateByUrl('/connexion');
    });
  }

  constructor(private authService: AuthService, private router: Router) {}
}
