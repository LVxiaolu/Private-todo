import * as types from '../action-types';
export default function (state='all',action) {
 switch (action.type){
   case types.CHANGE_FILTER:
     return action.filter;
   default:
     return state;
 }
}

