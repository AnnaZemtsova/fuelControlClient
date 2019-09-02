import {ActionReducerMap} from '@ngrx/store';
import * as fromAuth from '../auth/reducers/auth.reducer';

export interface AppState {
  authReducer: fromAuth.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  authReducer: fromAuth.authReducer,
};
