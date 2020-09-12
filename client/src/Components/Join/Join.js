import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

export default function Join() {
  const [room, setRoom] = useState('');
  const [name, setName] = useState('');

  return (
    <div className='joinOuterContainer'>
      <div className='joinInnerContainer'>
        <h1 className='heading'>Join</h1>
        <div>
          <input
            type='text'
            className='joinInput'
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            className='joinInput mt-20'
            placeholder='Room'
            onChange={(e) => setRoom(e.target.value)}
          />
        </div>
        <Link to={`/chat?name=${name}&room=${room}`}>
          <button
            className='button mt-20'
            type='submit'
            disabled={!name || !room}
          >
            Sign in
          </button>
        </Link>
      </div>
    </div>
  );
}
