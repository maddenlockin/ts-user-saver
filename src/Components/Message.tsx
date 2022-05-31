import React from 'react'
import { UserListObject } from '../Interfaces';
import { createUser, githubStatus } from "../services/fetch-utils";

interface MessageProps{
  username: string, message:string
}

const Message = ({username, message}:MessageProps): JSX.Element => {

  return (
    <div className='message'>{message}</div>
  )
}
export default Message;