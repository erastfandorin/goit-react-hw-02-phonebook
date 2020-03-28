import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { logoPhonebook } from './App.module.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      contacts: [],
      filter: '',
    };
  }

  componentDidMount() {
    const getContacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(getContacts);
    if (parseContacts) {
      this.setState(({ contacts }) => {
        const newArray = [...contacts, ...parseContacts];
        return { contacts: newArray };
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState !== this.state) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  addContact = newContact => {
    this.setState(({ contacts }) => {
      const newArray = [...contacts, newContact];
      return { contacts: newArray };
    });
  };

  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = this.filterContacts(contacts, filter);
    return (
      <>
        <h1 className={logoPhonebook}>Phonebook</h1>
        <ContactForm contacts={contacts} addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter
          filter={filter}
          contacts={contacts}
          handleChange={this.handleChange}
        />
        <ContactList
          contacts={contacts}
          filterContacts={filterContacts}
          deleteContact={this.deleteContact}
        />
      </>
    );
  }
}

export default App;
