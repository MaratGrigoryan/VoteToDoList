import ListItems from '../ListItems';

const List = ({ data, onChange }) => {

  return (
    <div>
      <ul className="list">
        {
          (data || []).map((item, index) =>
              <ListItems list={item} index={index} onChange={onChange} key={index} />
            )
        }
      </ul>
    </div>
  )
};

export default List;
