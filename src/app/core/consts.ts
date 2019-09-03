import {SigninComponent} from '../auth/components/signin/signin.component';
export const BASE_URL = 'http://localhost:3000/';

export enum API_URLS {
  SIGNUP = 'users/signup',
  SIGNIN = 'users/signin'
}

export const ROUTES  = {
  HOME: {
    path: 'home',
    component: SigninComponent
  },
  SIGNIN: {
    path: 'signin',
    component: SigninComponent
  },
  SIGNUP: {
    path: 'signup',
    component: SigninComponent
  },
};
