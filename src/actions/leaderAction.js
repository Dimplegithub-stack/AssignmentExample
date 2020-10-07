import * as actionTypes from './actionTypes';

export const createLeader = (eachEntry) => {
    return {
      type: actionTypes.CREATE_NEW_LEARDER,
      eachEntry: eachEntry
    }
  };
  
  export const deleteLeader = (id) => {
    return {
      type: actionTypes.DELETE_LEARDER,
      id: id
    }
  };
   export const sortAsc = (eachEntry) => {
    return {
      type: actionTypes.SORT_ASC,
      eachEntry: eachEntry
    }
  };
   /*  export const sortDes = (id) => {
    return {
      type: actionTypes.SORT_DES,
      eachEntry: eachEntry
    }
  };**/