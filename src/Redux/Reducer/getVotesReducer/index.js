import { ADD_DATA } from '../../../Constants/defines';
import { getVotesApi } from '../../Api';
import { addDataAction } from '../../Action';

const getVotesReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_DATA:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state
  }
};

export const getVotes = params => async dispatch => {
  const data = await getVotesApi(params);
  dispatch(addDataAction(JSON.parse(data)));
}

export default getVotesReducer;
