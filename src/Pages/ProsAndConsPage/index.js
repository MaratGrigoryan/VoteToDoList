import { useState } from 'react';
import PropTypes from 'prop-types';

import List from '../../Components/List';

const ProsAndConsPage = ({ voteType, data, onRemove, addVote }) => {
  const [value, setValue] = useState('');

  const handleChange = ({ target: {value} }) => {
    setValue(value);
  };

  const handleClick = () => {
    if (value !== '') {
      addVote(value);
      setValue('');
    }
  };

  return (
    <>
      <div>
        <div>
          <h2>{voteType}</h2>
        </div>
        <List data={data} onChange={onRemove} />
      </div>
      <div>
        <input type="text" onChange={handleChange} value={value} />
        <button onClick={handleClick} disabled={!value}>+</button>
      </div>
    </>
  )
};

ProsAndConsPage.propTypes = {
  data: PropTypes.array,
  voteType: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  addVote: PropTypes.func.isRequired,
};

ProsAndConsPage.defaultProps = {
  data: [],
};

export default ProsAndConsPage;
