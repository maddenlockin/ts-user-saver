import React, { ChangeEvent, FormEventHandler, useState } from 'react'
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

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await checkUser();
    setUsername('');
  }
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }

  return (
    <div className="search-bar">
      <form onSubmit={handleSubmit}>
        <label>
          Github Username
          <input
            required
            value={username}
            onChange={handleChange}
            name="username"
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
}
export default Search;