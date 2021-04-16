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

export default ListItems;
