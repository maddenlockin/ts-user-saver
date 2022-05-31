import React, { useEffect, useState } from 'react'
import { ExternalLink } from 'react-external-link';
import { UserListObject, UserObject } from '../Interfaces';
import { githubInfo } from '../services/fetch-utils';
import { mungeTime } from '../services/munge-utils';


const Item = ({ username }: UserListObject): JSX.Element => {
  const [user, setUser] = useState<UserObject | null>(null);
  const [date, setDate] = useState<string>('');

  useEffect(() => {
    getUser();
    setUser(null)
  }, [])
  
  const getUser = async () => {
    const userInfo = await githubInfo(username);
    setUser(userInfo);
    const date = mungeTime(userInfo.created_at);
    setDate(date);
  }
  

  return (
      <div className='user-item'>
      <ExternalLink
        href={`https://api.github.com/users/${username}`}
        className="github-url"
      >
        {username}
      </ExternalLink> 
      <p>{user?.name}</p>
      <p>{user?.public_repos}</p>
      <p>{user?.public_gists}</p> 
      <p>{user?.followers}</p> 
      <p>{user?.following}</p> 
      <p>{date}</p> 
    </div>
  )
}

export default Item;