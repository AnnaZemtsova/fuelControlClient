import axios from 'axios';
import {BASE_URL} from '../consts';
axios.defaults.baseURL = BASE_URL;
axios.defaults.headers.Authorization =  'Bearer ' + localStorage.getItem('jwtToken');

export class RestService {

  public get(url: string, options?: any) {
    return axios.get(url, options);
  }
  public put(url: string, body: any) {
    return axios.put(url, body);
  }
  public post(url: string, body: any) {
    return axios.post(url, body);
  }
  public delete(url: string) {
    return axios.delete(url);
  }
}
