import React, { useState } from 'react'
import { githubStatus } from '../services/fetch-utils';

export default function Search({ fetchList }) {
  const [username, setUsername] = useState<string>('');

  const checkUser = async () => {
    const status = await githubStatus(username);
    
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
