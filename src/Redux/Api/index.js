import { URL } from '../../Constants/Api/Url';
import { GET_GROUP_ID, GET_USER_ID } from '../../Constants/Api';
import { GROUP_SERVICE, PROS_CONS_SERVICE, USER_SERVICE } from '../../Constants/Api/Service';

import Connection from '../../Utils/connection';

export const getGroupIdApi = async () => await Connection.get(GET_GROUP_ID);

export const getUserIdApi = async () => await Connection.get(GET_USER_ID);

export const getVotesApi = async ({ groupId, userId }) =>
  await Connection.get(`${URL}${PROS_CONS_SERVICE}${GROUP_SERVICE}${groupId}/${USER_SERVICE}${userId}`);

export const updateVotesApi = async ({ groupId, userId, data }) =>
  await Connection.put(`${URL}${PROS_CONS_SERVICE}${GROUP_SERVICE}${groupId}/${USER_SERVICE}${userId}`, data);
