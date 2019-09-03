import {createActions, createActionsType} from '../../../../utils/action.creator';

export  const VIN_ACTIONS = ['VinUpdate', 'VinAdd', 'VinSetItems',
  'VinGetItems', 'VinRemove'];

export const VinActionsConsts: any = createActionsType(VIN_ACTIONS);
export const VinActions: any = createActions(VinActionsConsts);
