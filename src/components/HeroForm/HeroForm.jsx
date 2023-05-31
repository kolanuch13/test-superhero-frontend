import React, { useState } from 'react';
import css from './HeroForm.module.css';
import { IoRepeat } from 'react-icons/io5';

export const HeroForm = ({ onSubmitFunc, currentHero }) => {
  const [heroForm, setHeroForm] = useState({
    nickname: currentHero?.nickname ||'',
    realName: currentHero?.realName ||'',
    originDescription: currentHero?.originDescription ||'',
    catchPhrase: currentHero?.catchPhrase ||'',
    superpowers: currentHero?.superpowers ||'',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setHeroForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChangeSuperPowers = e => {
    const superPowersArray = e.target.value.split(',');
    setHeroForm(prev => ({
      ...prev,
      superpowers: superPowersArray,
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = currentHero?._id;
    if (id !== undefined) {
      onSubmitFunc(id, heroForm);
    } else {
      onSubmitFunc(heroForm);
    }
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="nickname">Nickname</label>
        <input
          type="text"
          name="nickname"
          id="nickname"
          placeholder="Superman"
          value={heroForm.nickname}
          onChange={handleChange}
        />

        <label htmlFor="realname">Real name</label>
        <input
          type="text"
          name="realName"
          id="realName"
          placeholder="Clark Kent"
          value={heroForm.realName}
          onChange={handleChange}
        />

        <label htmlFor="originDescription">Origin</label>
        <textarea
          rows={5}
          cols={40}
          type="text"
          name="originDescription"
          id="originDescription"
          placeholder="Born in Crypton..."
          value={heroForm.originDescription}
          onChange={handleChange}
        />

        <label htmlFor="catchPhrase">Phrase</label>
        <input
          type="text"
          name="catchPhrase"
          id="catchPhrase"
          placeholder="Truth, justice..."
          value={heroForm.catchPhrase}
          onChange={handleChange}
        />

        <label htmlFor="superpowers">Super powers</label>
        <input
          type="text"
          name="superpowers"
          id="superpowers"
          placeholder="Strength,flight..."
          value={heroForm.superpowers}
          onChange={handleChangeSuperPowers}
          className={css.lastInput}
        />
        <button className={css.edditButton} type="submit">
          Submit
          <IoRepeat size={40} color={'black'} />
        </button>
      </form>
    </div>
  );
};
