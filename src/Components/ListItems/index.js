import PropTypes from 'prop-types';

const ListItems = ({ list, index, onChange }) => {
  return (
    <li className="listItems" data-index={index}>
      <p>{ list }</p>
      <div>
        <button onClick={() => onChange(index)}>-</button>
      </div>
    </li>
  )
};

ListItems.propType = {
  list: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default ListItems;
