import React, { FC, useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search';
import List from './Components/List';
import { getAllUsers } from './services/fetch-utils';
import { UserListObject } from './Interfaces';


const App: FC = () =>  {
  const [list, setList] = useState<UserListObject[]>([]);

  const fetchList = async () => {
    const listRes = await getAllUsers();
    setList(listRes)
  }

  useEffect(() => {
    fetchList();
  }, []);

  return (
      <div className="App">
        <Search fetchList={fetchList} />
        <List list={list} />
      </div>
  );
}

export default App;
