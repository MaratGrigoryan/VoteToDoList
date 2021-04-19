import { useDispatch, useSelector } from 'react-redux';

import ProsAndConsPage from '../../Pages/ProsAndConsPage';
import { updateVotes } from '../../Redux/Reducer/UpdateVotesReducer';
import { removeElement } from '../../Utils/helpers';

const ConsVote = () => {
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

  const handleChangeCons = i => {
    const newCons = removeElement(cons, i);

    const newData = {
      groupId,
      userId,
      data: { pros, cons: newCons }
    }

    dispatch(updateVotes(newData));
  }

  const addVoteCons = (vote) => {
    const newVoteCons = [...cons, vote];

    const newData = {
      groupId,
      userId,
      data: {
        pros,
        cons: newVoteCons,
      }
    }
    dispatch(updateVotes(newData));
  };

  return (
    <div>
      <ProsAndConsPage voteType="Cons" data={cons} onRemove={handleChangeCons} addVote={addVoteCons} />
    </div>
  )
};

export default ConsVote;
