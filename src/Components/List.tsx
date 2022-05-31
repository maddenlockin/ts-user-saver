import React from 'react'
import { UserObject } from '../Interfaces';
import Item from './Item'

interface Props {
  list: UserObject[]
} 

const List = ({list}: Props): JSX.Element => {
  return (
    <div>
      {list.map((item)  => (
        <Item {...item} key={item.username} />
      ))}
    </div>
  );
}


export default List;