import { updateVotesApi } from '../../Api';
import { addDataAction } from '../../Action';

export const updateVotes = params => async dispatch =>  {
  const data = await updateVotesApi(params);
  data && dispatch(addDataAction(data));
};
