import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'

import { getGroupId, getUserId } from './Redux/Reducer/callParamsReducer';
import { getVotes } from './Redux/Reducer/getVotesReducer';

import ProsVote from './Pages/ProsVote';
import ConsVote from './Pages/ConsVote';

import './Styles/index.scss';

const App = () => {
  const dispatch = useDispatch();
  const {
    userData: {
      groupId,
      userId,
    },
  } = useSelector(state => state);


  useEffect(() => {
    dispatch(getGroupId());
    dispatch(getUserId());
  }, []);

  useEffect(() => {
   groupId && userId && dispatch(getVotes({ groupId, userId }))
  }, [groupId, userId]);

  return (
    <div className="voteListContainer">
      <div className="prosAndConsList">
        <ProsVote />
        <ConsVote />
      </div>
    </div>
  );
}

export default App;
