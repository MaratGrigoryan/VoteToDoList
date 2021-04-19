import { useDispatch, useSelector } from 'react-redux';

import ProsAndConsPage from '../../Pages/ProsAndConsPage';
import { updateVotes } from '../../Redux/Reducer/UpdateVotesReducer';
import { removeElement } from '../../Utils/helpers';

const ProsVote = () => {
  const dispatch = useDispatch();
  const {
    userData: {
      groupId,
      userId,
    },
    votesData: {
      pros,
      cons,
    },
  } = useSelector(state => state);

  const handleChangePros = i => {
    const newPros = removeElement(pros, i);

    const newData = {
      groupId,
      userId,
      data: { pros: newPros, cons }
    }

    dispatch(updateVotes(newData));
  }

  const addVotePros = (vote) => {
    const newVotePros = [...pros, vote];
    const newData = {
      groupId,
      userId,
      data: {
        pros: newVotePros,
        cons: cons,
      }
    }
    dispatch(updateVotes(newData));

  };

  return (
    <div>
      <ProsAndConsPage voteType="Pros" data={pros} onRemove={handleChangePros} addVote={addVotePros} />
    </div>
  )
};

export default ProsVote;
