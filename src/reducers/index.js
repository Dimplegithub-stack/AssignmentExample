import { combineReducers } from 'redux';
import leaderreducer from './leaderReducer';

const rootReducer = combineReducers({
    leaderreducer:leaderreducer
 
});

export default rootReducer;