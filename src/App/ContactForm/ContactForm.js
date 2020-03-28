import React, { Component } from 'react';
import v4 from 'uuid/v4';
import PropTypes from 'prop-types';
import {
  formPhonebook,
  inputFormPhonebook,
  buttonFormPhonebook,
} from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  constructor() {
    super();
    this.state = { ...INITIAL_STATE };
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    const { name, number } = this.state;
    const { contacts, addContact } = this.props;
    e.preventDefault();
    if (!contacts.find(contact => contact.name === name)) {
      const newContact = {
        id: v4(),
        name,
        number,
      };
      addContact(newContact);

      this.reset();
    } else {
      alert(`${name}is already in contacts.`);
    }
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={formPhonebook} onSubmit={this.handleSubmit}>
        <label htmlFor="formPhonebookName">
          Name
          <input
            className={inputFormPhonebook}
            type="text"
            name="name"
            value={name}
            id="formPhonebookName"
            onChange={this.handleChange}
            required
          />
        </label>

        <label htmlFor="formPhonebookNumber">
          Number
          <input
            className={inputFormPhonebook}
            type="number"
            name="number"
            value={number}
            id="formPhonebookNumber"
            onChange={this.handleChange}
            required
          />
        </label>

        <button type="submit" className={buttonFormPhonebook}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  addContact: PropTypes.func.isRequired,
};

export default ContactForm;
