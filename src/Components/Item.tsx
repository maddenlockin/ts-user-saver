import React from 'react'
import { UserObject } from '../Interfaces';


const Item = ({ username }: UserObject): JSX.Element => {
  return (
    <div>{username}</div>
  )
}

export default Item;