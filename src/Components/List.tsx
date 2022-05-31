import React from 'react'
import { UserListObject } from '../Interfaces';
import Item from './Item'

interface Props {
  list: UserListObject[]
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