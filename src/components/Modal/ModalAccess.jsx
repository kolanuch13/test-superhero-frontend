import React, { useState } from 'react'
import css from './ModalAccess.module.css';
import { IoRepeat } from 'react-icons/io5';

export const ModalAccess = () => {
  const [code, setCode] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    localStorage.setItem('innerKey', `${code}`);
  };
  return (
    <div className={css.formWrapper}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="code">Access code:</label>
        <input
          type="text"
          name="code"
          value={code}
          onChange={e => setCode(e.target.value)}
        />
        <button className={css.edditButton} type="submit">
          Submit
          <IoRepeat size={40} color={'black'} />
        </button>
      </form>
    </div>
  );
};
