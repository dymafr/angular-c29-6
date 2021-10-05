import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../shared/interfaces/user.interface';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
})
export class ProfilComponent implements OnInit {
  public user$: Observable<User | null> = this.authService.user$.asObservable();

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}
}
