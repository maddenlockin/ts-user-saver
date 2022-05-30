import React from 'react'

export default function Search() {
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
