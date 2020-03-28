import React from 'react';
import PropTypes from 'prop-types';
import { buttonDelete } from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li>
      {contact.name}: {contact.number}
      <button type="button" className={buttonDelete} onClick={onDeleteContact}>
        Delete
      </button>
    </li>
  );
};

Contact.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    number: PropTypes.string,
  }).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
