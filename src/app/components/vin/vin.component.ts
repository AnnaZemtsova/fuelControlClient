import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as fromApp from '../../store/app.reducers';
import {UserActions} from '../../user/actions/user.actions';
import {VinActions} from './store/actions/vin.actions';
import {Vin} from './store/model/vin.model';

@Component({
  selector: 'app-vin',
  templateUrl: './vin.component.html',
  styleUrls: ['./vin.component.css']
})
export class VinComponent implements OnInit {
   @Input() vin: Vin;
  isEdit = false;
  constructor(private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  delete() {
    this.store.dispatch(VinActions.VinRemove.Request( this.vin._id));
  }

  edit() {
    if (this.isEdit) {
      this.store.dispatch(VinActions.VinUpdate.Request(this.vin));
    }
    this.isEdit = !this.isEdit;
  }
}
