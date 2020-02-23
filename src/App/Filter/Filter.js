import React from "react";
import PropTypes from "prop-types";

const Filter = ({ style, filter, contacts, handleChange }) => {
  return (
    contacts.length > 2 && (
      <>
        <p className={style.page_find_contacts}>Find contacts by name</p>
        <input
          className={style.input_find_contacts}
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
  style: PropTypes.object.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.array.isRequired,
  handleChange: PropTypes.func.isRequired
};

export default Filter;
