import * as actionTypes from '../actions/actionTypes';

export default function leaderreducer (state = [], action)  {
    switch (action.type){
      
     case actionTypes.CREATE_NEW_LEARDER:
      return [
        ...state,
        Object.assign({}, action.eachEntry)
      ];
	 case actionTypes.DELETE_LEARDER:
	  return state.filter((data, i) => i !== action.id);
	  
	  case actionTypes.SORT_ASC:
	  return state.sort((a, b) => {
    
        return a-b;
      
    });
      default:
            return state;
    }
  };