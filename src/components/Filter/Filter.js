import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import fade from '../transition/fade.module.css';
import {
  findContacts,
  findContactsParagraph,
  findContactsInput,
} from './Filter.module.css';

const Filter = ({ filter, contacts, changeFilter }) => {
  const handleChange = ({ target }) => {
    changeFilter(target.value);
  };
  return (
    <CSSTransition
      in={contacts.length > 1}
      timeout={250}
      classNames={fade}
      unmountOnExit
    >
      <div className={findContacts}>
        <p className={findContactsParagraph}>Find contacts by name</p>
        <input
          className={findContactsInput}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </div>
    </CSSTransition>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;
