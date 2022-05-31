import React from 'react'
import { UserObject } from '../Interfaces';
import { githubInfo } from '../services/fetch-utils';


const Item = ({ username }: UserObject): JSX.Element => {

  const getUser = async () => {
    const userInfo = await githubInfo(username);

  }
  
  return (
    <div>{username}</div>
  )
}

export default Item;