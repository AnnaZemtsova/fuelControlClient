import {ActionReducerMap} from '@ngrx/store';
import * as fromAuth from '../auth/reducers/auth.reducer';
import * as fromUser from '../user/reducers/user.reducer';
import * as fromVins from '../components/vin/store/reducers/vin.reducers';

export interface AppState {
  authReducer: fromAuth.State;
  vinsReducer: fromVins.State;
  userReducer: fromUser.State;
}

export const appReducer: ActionReducerMap<AppState> = {
  authReducer: fromAuth.authReducer,
  vinsReducer: fromVins.vinsReducer,
  userReducer: fromUser.userReducer
};
