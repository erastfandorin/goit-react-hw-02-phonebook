import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { logoPhonebook } from './App.module.css';
import slideLogo from './transition/slideLogo.module.css';

class App extends Component {
  loadLogo = false;

  componentDidMount() {
    const { addContactWithLocalhost } = this.props;
    const getContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(getContacts);
    if (parseContacts) {
      addContactWithLocalhost(parseContacts);
    }
    this.ready();
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (prevProps !== this.props) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  ready = () => {
    this.loadLogo = true;
  };

  handleChange = ({ target }) => {
    const { changeFilter } = this.props;
    changeFilter(target.value);
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  render() {
    const { contacts, filter, addContact, deleteContact } = this.props;

    return (
      <>
        <CSSTransition
          in={this.loadLogo}
          timeout={50000}
          classNames={slideLogo}
        >
          <h1 className={logoPhonebook}>Phonebook</h1>
        </CSSTransition>
        <ContactForm contacts={contacts} addContact={addContact} />
        <Filter
          filter={filter}
          contacts={contacts}
          handleChange={this.handleChange}
        />
        <ContactList
          contacts={contacts}
          filterContacts={this.filterContacts(contacts, filter)}
          deleteContact={deleteContact}
        />
      </>
    );
  }
}

App.propTypes = {
  addContactWithLocalhost: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  addContact: PropTypes.func.isRequired,
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default App;
