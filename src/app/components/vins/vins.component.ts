import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import {VinActions} from '../vin/store/actions/vin.actions';
import {User} from '../../user/models/user';
import {map} from 'rxjs/operators';
import {UserActions} from '../../user/actions/user.actions';
import {Vin} from '../vin/store/model/vin.model';

@Component({
  selector: 'app-vins',
  templateUrl: './vins.component.html',
  styleUrls: ['./vins.component.css']
})
export class VinsComponent implements OnInit {
  vinsPromise: Promise<Vin[]> = new Promise<Vin[]>(res => this.vinsResolve = res);
  user: User;
  newVin: string;
  vinsResolve: (value?: (PromiseLike<Vin[]> | Vin[])) => void;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {

    this.store.select('vinsReducer').pipe(map((state: any) => {
      return state;
    })).subscribe(state => {
      console.log(state);
      if (state && state.vins) {
        this.vinsPromise = new Promise<Vin[]>(res => this.vinsResolve = res);
        this.vinsResolve(state.vins);
      }
    });

    this.store.select('userReducer').pipe(map((state: any) => {
      return state;
    })).subscribe(state => {
      this.user = state.user;
    });

    this.store.dispatch(UserActions.UserFetch.Request());
    this.store.dispatch(VinActions.VinGetItems.Request({idUser: this.user._id}));
  }

  addVin() {
      this.store.dispatch(VinActions.VinAdd.Request({idUser: this.user._id, vinNumber: this.newVin}));
  }
}
