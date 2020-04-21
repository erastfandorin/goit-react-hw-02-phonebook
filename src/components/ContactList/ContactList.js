import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import Contact from './Contact/Contact';
import slide from '../transition/slide.module.css';
import { contactList } from './ContactList.module.css';

const ContactList = ({ contacts, filteredContacts, deleteContact }) => {
  return (
    contacts.length > 0 && (
      <TransitionGroup className={contactList} component="ul">
        {filteredContacts.map(contact => (
          <CSSTransition
            classNames={slide}
            key={contact.id}
            timeout={250}
            unmountOnExit
          >
            <Contact
              contact={contact}
              onDeleteContact={() => deleteContact(contact.id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    )
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filteredContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactList;
