import {AuthActionsConsts} from '../actions/auth.actions';

export interface State {
  isAuthorised: boolean;
  error: string;
}
const initialState: State = {
  isAuthorised: false,
  error: ''
};

export function authReducer(state = initialState, action): State {
  switch (action.type) {
    case AuthActionsConsts.AuthLogin.Request:
      return {
        ...state
      };
    case AuthActionsConsts.AuthLogin.Success:
      return {
      ...state,
        isAuthorised: true
      };
    case AuthActionsConsts.AuthLogin.Failed:
      return {
        ...state,
        isAuthorised: false,
        error: action.payload
      };
    case AuthActionsConsts.AuthLogin.Clear:
      return {
        ...state,
        isAuthorised: false
      };
    default:
      return {
        ...state
      };
  }
}
