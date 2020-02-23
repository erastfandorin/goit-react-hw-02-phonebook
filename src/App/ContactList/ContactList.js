import React from "react";
import Contact from "./Contact/Contact";
import PropTypes from "prop-types";

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
  contacts: PropTypes.array.isRequired,
  filterContacts: PropTypes.array.isRequired,
  deleteContact: PropTypes.func.isRequired
};

export default ContactList;
