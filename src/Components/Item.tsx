import React, { useEffect, useState } from 'react'
import { ExternalLink } from 'react-external-link';
import { UserListObject, UserObject } from '../Interfaces';
import { githubInfo } from '../services/fetch-utils';


const Item = ({ username }: UserListObject): JSX.Element => {
  const [user, setUser] = useState<UserObject | null>(null);

  useEffect(() => {
    getUser();
    setUser(null)
  }, [])
  
  const getUser = async () => {
    const userInfo = await githubInfo(username);
    setUser(userInfo);
  }
  console.log(user, 'user')

  return (
      <div className='user-item'>
      <ExternalLink
        href={`https://api.github.com/users/${username}`}
        className="github-url"
      >
        {username}
      </ExternalLink> {' '}
      <span>{user?.name}</span>{' '}
      <span>{user?.public_repos}</span>{' '}
      <span>{user?.public_gists}</span> {' '}
      <span>{user?.followers}</span> {' '}
      <span>{user?.following}</span> {' '}
      <span>{user?.created_at}</span> {' '}
    </div>
  )
}

export default Item;