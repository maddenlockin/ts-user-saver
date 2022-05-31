import React, { useEffect, useState } from 'react'
import { ExternalLink } from 'react-external-link';
import { UserListObject, UserObject } from '../Interfaces';
import { githubInfo } from '../services/fetch-utils';
import { mungeTime } from '../services/munge-utils';
import { TableRow, TableCell } from "@mui/material";


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
      <TableRow className='user-item'>
        <TableCell>
          {
            <ExternalLink
              href={`https://api.github.com/users/${username}`}
              className="github-url"
            >
              {username}
            </ExternalLink>
          }
        </TableCell>
        <TableCell>{user?.name}</TableCell>
        <TableCell>{user?.public_repos}</TableCell>
        <TableCell>{user?.public_gists}</TableCell>
        <TableCell>{user?.followers}</TableCell>
        <TableCell>{user?.following}</TableCell>
        <TableCell>{date}</TableCell>
      </TableRow>
  );
}

export default Item;