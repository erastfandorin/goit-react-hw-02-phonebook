import React from 'react';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact';

const ContactList = ({ contacts, filterContacts, deleteContact }) => {
  return (
    contacts.length > 0 && (
      <ul>
        {filterContacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            onDeleteContact={() => deleteContact(contact.id)}
          />
        ))}
      </ul>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filterContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
