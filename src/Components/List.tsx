import React from 'react'
import Item from './Item'

type ListProps = {
  list: {[username: string]: object}[]
}

const List = ({ list }: ListProps): JSX.Element => {
  return (
    <div>
      <Item />
    </div>
  )
}


export default List;