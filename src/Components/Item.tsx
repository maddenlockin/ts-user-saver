import React from 'react'
import { IUser } from '../Interfaces';

interface Props {
  user: IUser;
}

const Item = ({ user }: Props): JSX.Element => {
  return (
    <div>{user.username}</div>
  )
}

export default Item;