import React from 'react';
import PropTypes from 'prop-types';
import { pageFindContacts, inputFindContacts } from './Filter.module.css';

const Filter = ({ filter, contacts, handleChange }) => {
  return (
    contacts.length > 2 && (
      <>
        <p className={pageFindContacts}>Find contacts by name</p>
        <input
          className={inputFindContacts}
          type="text"
          name="filter"
          value={filter}
          onChange={handleChange}
        />
      </>
    )
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleChange: PropTypes.func.isRequired,
};

export default Filter;
