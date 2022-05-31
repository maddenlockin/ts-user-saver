import React from 'react'
import Item from './Item'

interface Props {
  list:[{ username: string }]
}

const List = (props: Props): JSX.Element => {
  return (
    <div>
{/*       
      {props.list.map((item)  => (
        <Item item={item.username} key={item.username} />
      ))} */}
    </div>
  );
}


export default List;