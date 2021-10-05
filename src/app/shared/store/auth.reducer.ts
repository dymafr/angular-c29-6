import { createReducer, on } from '@ngrx/store';
import { User } from '../interfaces/user.interface';
import * as AuthActions from './auth.actions';

export interface AuthState {
  user: User | null;
  isLoggedin: boolean | null;
  error: string | null;
}

export const authStateKey = '[ auth ] key';

export const AUTH_INTIAL_STATE: AuthState = {
  user: null,
  isLoggedin: null,
  error: null,
};

export const authReducer = createReducer(
  AUTH_INTIAL_STATE,
  on(
    AuthActions.fetchCurrentUserSuccessAction,
    AuthActions.connexionSuccessAction,
    (state: AuthState, { user }: { user: User | null }): AuthState => {
      return {
        ...state,
        user,
        isLoggedin: user ? true : false,
        error: null,
      };
    }
  ),
  on(
    AuthActions.inscriptionErrorAction,
    AuthActions.connexionErrorAction,
    (state: AuthState, { error }: { error: string }): AuthState => {
      return {
        ...state,
        error,
      };
    }
  ),
  on(AuthActions.logoutSuccessAction, (state: AuthState): AuthState => {
    return {
      ...state,
      user: null,
      isLoggedin: false,
    };
  })
);
