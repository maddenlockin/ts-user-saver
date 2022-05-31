import React, { FC, useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search';
import List from './Components/List';
import { getAllUsers } from './services/fetch-utils';
import { UserObject } from './Interfaces';

// type UserObject = {
//   username: string
// }
const App: FC = () =>  {
  const [list, setList] = useState<UserObject[]>([]);
  // list is an array of type UserObject 

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
