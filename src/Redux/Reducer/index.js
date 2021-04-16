import { combineReducers  } from 'redux';
import getCallParamsReducer from './callParamsReducer';
import getVotesReducer from './getVotesReducer';

export default combineReducers({
  userData: getCallParamsReducer,
  votesData: getVotesReducer,
});
