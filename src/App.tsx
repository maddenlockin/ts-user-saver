import React, { FC, useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search';
import List from './Components/List';
import { getAllUsers } from './services/fetch-utils';
import { UserListObject } from './Interfaces';

// type UserListObject = {
//   username: string
// }
const App: FC = () =>  {
  const [list, setList] = useState<UserListObject[]>([]);
  // list is an array of type UserListObject 

  const fetchList = async () => {
    const listRes = await getAllUsers();
    setList(listRes)
  }

  useEffect(() => {
    fetchList();
  }, []);

  console.log(list);

  return (
      <div className="App">
        <Search fetchList={fetchList} />
        <List list={list} />
      </div>
  );
}

export default App;
