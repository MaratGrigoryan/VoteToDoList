import { GROUP_ID, USER_ID } from '../../../Constants/defines';
import { getGroupIdApi, getUserIdApi } from '../../Api';

const groupIdAction = (data) => {
  return {
    type: GROUP_ID,
    payload: data,
  }
}
const userIdAction = (data) => {
  return {
    type: USER_ID,
    payload: data,
  }
}

const getCallParamsReducer = (state = {}, action) => {
  switch (action.type) {
    case GROUP_ID:
      return {
        ...state,
        ...action.payload,
      };
    case USER_ID:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state
  }
};

export const getGroupId = () => async dispatch => {
  const data = await getGroupIdApi();
  dispatch(groupIdAction(data));
}

export const getUserId = () => async dispatch => {
  const data = await getUserIdApi();
  dispatch(userIdAction(data));
};

export default getCallParamsReducer;
