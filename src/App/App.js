import React, { Component } from "react";
import style from "./App.module.css";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";

class App extends Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: ""
  };

  componentDidMount() {
    const getContacts = localStorage.getItem("contacts");
    const parseContacts = JSON.parse(getContacts);
    if (parseContacts) {
      this.setState(({ contacts }) => {
        const newArray = [...contacts, ...parseContacts];
        return { contacts: newArray };
      });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
      console.log("save");
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };
  filterContacts = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
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
      contacts: contacts.filter(contact => contact.id !== id)
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const filterContacts = this.filterContacts(contacts, filter);
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          style={style}
          contacts={contacts}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter
          style={style}
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
