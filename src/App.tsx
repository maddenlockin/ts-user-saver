import React, { useEffect, useState } from 'react';
import './App.css';
import Search from './Components/Search';
import List from './Components/List';
import { getAllUsers } from './services/fetch-utils';

// export interface IState {
//   list: {
//     username: string;
//     id: string;
//   }[];
// }

function App() {
  const [list, setList] = useState<{ id: string }[]>([]);

  async function fetchList() {
    const listRes = await getAllUsers();
    console.log(listRes)
    setList(listRes);
  }
  useEffect(() => {
    fetchList();
  }, []);

  console.log(list)


  return (
    <div className="App">
      <Search />
      <List />
    </div>
  );
}

export default App;
