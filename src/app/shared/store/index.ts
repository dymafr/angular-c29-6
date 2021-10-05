import { routerReducer, RouterState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { authReducer, AuthState, authStateKey } from './auth.reducer';

export interface AppState {
  [authStateKey]: AuthState;
  router: RouterState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  [authStateKey]: authReducer,
  router: routerReducer,
};
