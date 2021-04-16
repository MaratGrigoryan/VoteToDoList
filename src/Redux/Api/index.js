import { URL } from '../../Constants/Api/Url';
import { PUT_METHOD } from '../../Constants/defines';
import { GET_GROUP_ID, GET_USER_ID } from '../../Constants/Api';
import { GROUP_SERVICE, PROS_CONS_SERVICE, USER_SERVICE } from '../../Constants/Api/Service';

export const getGroupIdApi = async () => {
  const response = await fetch(GET_GROUP_ID);
  return await response.json();
};

export const getUserIdApi = async () => {
  const response = await fetch(GET_USER_ID);
  return await response.json();
};

export const getVotesApi = async ({ groupId, userId }) => {
  const response = await fetch(`${URL}${PROS_CONS_SERVICE}${GROUP_SERVICE}${groupId}/${USER_SERVICE}${userId}`);
  return await response.json();
};

export const updateVotesApi = async ({ groupId, userId, data }) => {
  try {
    const response = await fetch(`${URL}${PROS_CONS_SERVICE}${GROUP_SERVICE}${groupId}/${USER_SERVICE}${userId}`, {
      method: PUT_METHOD,
      body: JSON.stringify(data)
    });

    if (response.ok) {
      return await response.json();
    }

  }catch (e) {
    console.log(e)
  }


};
