import {User} from '../models/user';
import {UserActionsConsts} from '../actions/user.actions';

export interface State {
  user: User;
  error: string;
}
const initialState: State = {
  user: null,
  error: ''
};

export function userReducer(state = initialState, action): State {
  switch (action.type) {
    case UserActionsConsts.UserCreate.Request:
      return {
        ...state
      };
    case UserActionsConsts.UserFetch.Success:
      const fetchedUser: User = JSON.parse(action.payload.user);
      return {
        ...state,
        user: fetchedUser
      };

    case UserActionsConsts.UserFetch.Request:
      return {
        ...state
      };

    case UserActionsConsts.UserCreate.Success:
      const createdUser: User = JSON.parse(action.payload.user);
      return {
        ...state,
        user: createdUser
      };

    case UserActionsConsts.UserCreate.Faild:
      return {
        ...state,
        error: action.payload
      };

    case UserActionsConsts.UserFetch.Failed:
      return {
        ...state,
        error: action.payload
      };

    default:
      return {
        ...state
      };
  }
}
