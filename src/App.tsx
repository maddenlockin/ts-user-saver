import React from 'react';
import './App.css';
import Search from './Components/Search';
import List from './Components/List';
import { getAllUsers } from './services/fetch-utils';

function App() {

  getAllUsers();
  
  return (
    <div className="App">
      <Search />
      <List />
    </div>
  );
}

export default App;
