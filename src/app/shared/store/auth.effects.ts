import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Credentials, User } from '../interfaces/user.interface';
import { AuthService } from '../services/auth.service';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthEffects {
  tryFetchCurrentUserEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tryFetchCurrentUserAction),
      switchMap(() =>
        this.authService.fetchCurrentUser().pipe(
          map((user: User | null) =>
            AuthActions.fetchCurrentUserSuccessAction({ user })
          ),
          catchError(() => EMPTY)
        )
      )
    )
  );

  tryInscriptionEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tryInscriptionAction),
      switchMap(({ user }: { user: User }) =>
        this.authService.inscription(user).pipe(
          switchMap(() => {
            this.router.navigateByUrl('/connexion');
            return EMPTY;
          }),
          catchError((err) =>
            of(
              AuthActions.inscriptionErrorAction({
                error: err.error ? err.error : 'Une erreur est survenue',
              })
            )
          )
        )
      )
    )
  );

  tryConnexionEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tryConnexionAction),
      switchMap(({ credentials }: { credentials: Credentials }) =>
        this.authService.connexion(credentials).pipe(
          map((user: User) => {
            this.router.navigateByUrl('/');
            return AuthActions.connexionSuccessAction({ user });
          }),
          catchError((err) =>
            of(
              AuthActions.connexionErrorAction({
                error: err.error ? err.error : 'Une erreur est survenue',
              })
            )
          )
        )
      )
    )
  );

  tryLogoutEffect = createEffect(() =>
    this.actions$.pipe(
      ofType(AuthActions.tryLogoutAction),
      switchMap(() =>
        this.authService.logout().pipe(
          map(() => {
            this.router.navigateByUrl('/connexion');
            return AuthActions.logoutSuccessAction();
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}
}