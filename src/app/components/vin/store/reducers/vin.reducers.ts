import {Vin} from '../model/vin.model';
import {VinActionsConsts} from '../actions/vin.actions';


export interface State {
  vins: Vin[];
  error: string;
}
const initialState: State = {
  vins: [],
  error: null
};

export function vinsReducer(state = initialState, action: any): State {
  switch (action.type) {


    case  VinActionsConsts.VinGetItems.Request:
      return {
        ...state
      };

    case VinActionsConsts.VinGetItems.Success:
      return {
        ...state,
       // vins: action.payload
      };
    case VinActionsConsts.VinGetItems.Failed:
      return {
        ...state,
        error: action.payload
      };



    case VinActionsConsts.VinSetItems.Request:
      return {
        ...state
      };
    case VinActionsConsts.VinSetItems.Success:
      return {
        ...state,
        //vins: action.payload
      };
    case VinActionsConsts.VinSetItems.Failed:
      return {
        ...state,
        error: action.payload
      };


    case VinActionsConsts.VinUpdate.Request:
      return {
        ...state
      };
    case VinActionsConsts.VinUpdate.Success:
      const { vin } = action.payload;

      return {
        ...state,
        vins: [...state.vins.map(next => {
          if (next._id === vin._id) {
            next = vin;
          }
          return next;
        })]
      };
    case VinActionsConsts.VinUpdate.Failed:
      return {
        ...state,
        error: action.payload
      };



    case VinActionsConsts.VinAdd.Request:
      return {
        ...state
      };
    case VinActionsConsts.VinAdd.Success:
      return {
        ...state,
        vins: [...state.vins, action.payload]
      };
    case VinActionsConsts.VinAdd.Failed:
      return {
        ...state,
        error: action.payload
      };



    case VinActionsConsts.VinRemove.Request:
      return {
        ...state
      };
    case VinActionsConsts.VinRemove.Success:
      return {
        ...state,
        vins: state.vins.filter(next => next._id !== action.payload.id)
      };
    case VinActionsConsts.VinRemove.Failed:
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
