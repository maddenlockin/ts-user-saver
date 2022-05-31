import React from 'react'
import { UserListObject } from '../Interfaces';
import Item from './Item'
import { TableHead, TableContainer, TableRow, TableBody, TableCell } from "@mui/material";


interface Props {
  list: UserListObject[]
} 

const List = ({list}: Props): JSX.Element => {
  return (
    <TableContainer className='table-container'>
      <TableHead>
        <TableRow>
          <TableCell>UserName</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Public Repos</TableCell>
          <TableCell>Public Gists</TableCell>
          <TableCell>Followers</TableCell>
          <TableCell>Following</TableCell>
          <TableCell>Created on</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {list.map((item, i) => (
          <Item {...item} key={item.username + i} />
        ))}
      </TableBody>
    </TableContainer>
  );
}


export default List;