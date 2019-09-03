import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {catchError, map, switchMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {VinActions, VinActionsConsts} from '../actions/vin.actions';
import {RestService} from '../../../../core/services/rest.service';
import {Vin} from '../model/vin.model';


@Injectable()
export class VinEffects {
  @Effect()
  updateItem = this.actions.pipe(
    ofType(VinActionsConsts.VinUpdate.Request),
    switchMap((item: any) => {
      return this.rest.put('/vins', item.payload);
    }),
    map((resData: any) => {
      return  VinActions.VinUpdate.Success({vin: resData.data});
    }),
    catchError(() => {
      return of(VinActions.VinUpdate.Failed());
    })
  );

  @Effect()
  deleteItem = this.actions.pipe(
    ofType(VinActionsConsts.VinRemove.Request),
    switchMap((item: any) => {
      return this.rest.delete('/vins?id=' + item.payload.id);
    }),
    map((resData: any) => {
      return  VinActions.VinRemove.Success({id: resData.data});
    }),
    catchError(() => {
      return of(VinActions.VinRemove.Failed());
    })
  );

  @Effect()
  addItem = this.actions.pipe(
    ofType(VinActionsConsts.VinAdd.Request),
    switchMap((item: any) => {
      console.log(item.payload);
      return this.rest.post('/vins', item.payload);
    }),
    map((resData: any) => {
      const vin: Vin = {_id: '', idUser: '', vinNumber: ''};
      const data = resData.data;
      vin._id = data._id;
      vin.idUser = data.user._id;
      vin.vinNumber = data.vinNumber;
      return  VinActions.VinAdd.Success(vin);
    }),
    catchError(() => {
      return of(VinActions.VinAdd.Failed());
    })
  );

  @Effect()
  getItems = this.actions.pipe(
    ofType(VinActionsConsts.VinGetItems.Request),
    switchMap((item: any) => {
      return this.rest.get('?idUser=' + item.payload.idUser);
    }),
    map((resData: any) => {
      return  VinActions.VinGetItems.Success(resData.data);
    }),
    catchError(() => {
      return of(VinActions.VinGetItems.Failed());
    })
  );
  constructor(private actions: Actions, private rest: RestService) {
  }
}
