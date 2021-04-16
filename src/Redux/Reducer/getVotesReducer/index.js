import { ADD_DATA } from '../../../Constants/defines';
import {URL} from '../../../Constants/Api/Url';
import { GROUP_SERVICE, PROS_CONS_SERVICE, USER_SERVICE } from '../../../Constants/Api/Service';

const getDataAction = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  }
}

const getProsConsDataReducer = (state = {}, action) => {
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

export const getVotes = ({groupId, userId}) => async dispatch => {
  const response = await fetch(`${URL}${PROS_CONS_SERVICE}${GROUP_SERVICE}${groupId}/${USER_SERVICE}${userId}`);
  const data = await response.json();
  dispatch(getDataAction(data));
}

export default getProsConsDataReducer;