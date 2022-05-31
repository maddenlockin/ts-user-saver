import React, { ChangeEvent, FormEventHandler, useState } from 'react'
import { createUser, githubStatus } from '../services/fetch-utils';
import Message from './Message';

const Search = ({ fetchList = async () => {} }): JSX.Element => {
  const [username, setUsername] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    await checkUser();
    setUsername('');
  }
  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  }
  const checkUser = async () => {
    const status = await githubStatus(username);
    if (status !== 200) {
      setMessage(`Error: Error adding "${username}" to the database`);
    } else {
      setMessage(`Success: user "${username}" added to the database`)
      await createUser({username});
      await fetchList();
    }
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
      <Message username={username} message={message}/>
    </div>
  );
}
export default Search;