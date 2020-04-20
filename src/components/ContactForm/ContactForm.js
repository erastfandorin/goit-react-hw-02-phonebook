import React, { Component } from 'react';
import v4 from 'uuid/v4';
import toastr from 'toastr/toastr';
import 'toastr/build/toastr.css';
import PropTypes from 'prop-types';
import {
  formPhonebook,
  formPhonebookLable,
  formPhonebookInput,
  formPhonebookButton,
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
      toastr.error(`${name} is already in contacts.`);

      toastr.options = {
        closeButton: false,
        debug: false,
        newestOnTop: false,
        progressBar: true,
        positionClass: 'toast-top-right',
        preventDuplicates: false,
        onclick: null,
        showDuration: '40000',
        hideDuration: '2000',
        timeOut: '250',
        extendedTimeOut: '1000',
        showEasing: 'swing',
        hideEasing: 'swing',
        showMethod: 'fadeIn',
        hideMethod: 'fadeOut',
      };
    }
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={formPhonebook} onSubmit={this.handleSubmit}>
        <label className={formPhonebookLable} htmlFor="formPhonebookName">
          Name
          <input
            className={formPhonebookInput}
            type="text"
            name="name"
            value={name}
            id="formPhonebookName"
            onChange={this.handleChange}
            required
          />
        </label>

        <label className={formPhonebookLable} htmlFor="formPhonebookNumber">
          Number
          <input
            className={formPhonebookInput}
            type="number"
            name="number"
            value={number}
            id="formPhonebookNumber"
            onChange={this.handleChange}
            required
          />
        </label>

        <button type="submit" className={formPhonebookButton}>
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
