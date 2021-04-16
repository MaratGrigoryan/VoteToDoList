import { useDispatch, useSelector } from 'react-redux';

import ProsAndConsPage from '../../Pages/ProsAndConsPage';
import { updateVotes } from '../../Redux/Reducer/UpdateVotesReducer';

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
    const newCons = [...cons];

    newCons.splice(i ,1);

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
