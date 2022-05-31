import React, { useState } from 'react'
import { createUser, githubStatus } from '../services/fetch-utils';

const Search = ({ fetchList }): JSX.Element => {
  const [username, setUsername] = useState<string>('');

  const checkUser = async () => {
    const status = await githubStatus(username);
    status !== 200
      ? alert("Error! This is not yet a Github username")
      : await createUser(username);
        await fetchList();
  }
  
  return (
    <div className='search-bar'>
      <form>
        <label>
          Github Username
          <input />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
}
export default Search;