import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search';
import List from './Components/List';
import { getAllUsers } from './services/fetch-utils';

function App(): JSX.Element {
  const [list, setList] = useState<{
    [username: string]: object
  }[]>([]);

  async function fetchList() {
    const listRes = await getAllUsers();
    setList(listRes)
  }

  useEffect(() => {
    fetchList();
  }, []);


  return (
    <div className="App">
      <Search />
      <List list={list} />
    </div>
  );
}

export default App;
