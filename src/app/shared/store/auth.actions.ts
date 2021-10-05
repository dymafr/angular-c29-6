import { createAction, props } from '@ngrx/store';
import { Credentials, User } from '../interfaces/user.interface';

export const tryFetchCurrentUserAction = createAction(
  '[ auth ] try fetch current user'
);
export const fetchCurrentUserSuccessAction = createAction(
  '[ auth ] fetch current user success',
  props<{ user: User | null }>()
);

export const tryInscriptionAction = createAction(
  '[ auth ] try inscription',
  props<{ user: User }>()
);
export const inscriptionErrorAction = createAction(
  '[ auth ] inscription error',
  props<{ error: string }>()
);

export const tryConnexionAction = createAction(
  '[ auth ] try connexion',
  props<{ credentials: Credentials }>()
);
export const connexionErrorAction = createAction(
  '[ auth ] connexion error',
  props<{ error: string }>()
);
export const connexionSuccessAction = createAction(
  '[ auth ] connexion error',
  props<{ user: User }>()
);

export const tryLogoutAction = createAction('[ auth ] try logout');
export const logoutSuccessAction = createAction('[ auth ] logout success');