import { ADD_DATA } from '../../Constants/defines';

export const addDataAction = (data) => {
  return {
    type: ADD_DATA,
    payload: data,
  }
}