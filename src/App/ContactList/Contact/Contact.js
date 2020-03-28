import React from 'react';
import PropTypes from 'prop-types';
import {
  contactListItem,
  contactListItemName,
  contactListItemNumber,
  buttonDelete,
} from './Contact.module.css';

const Contact = ({ contact, onDeleteContact }) => {
  return (
    <li className={contactListItem}>
      <p className={contactListItemName}>{contact.name}</p>
      <p className={contactListItemNumber}> {contact.number}</p>
      <button type="button" className={buttonDelete} onClick={onDeleteContact}>
        ⛌
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
