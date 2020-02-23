import React, { Component } from "react";
import v4 from "uuid/v4";
import PropTypes from "prop-types";

const INITIAL_STATE = {
  name: "",
  number: ""
};

class ContactForm extends Component {
  labelNameId = v4();
  labelNumberId = v4();
  state = { ...INITIAL_STATE };

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
        name: name,
        number: number
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
    const { style } = this.props;
    return (
      <form className={style.form_phonebook} onSubmit={this.handleSubmit}>
        <label htmlFor={this.labelNameId}>Name</label>
        <input
          className={style.input_form_phonebook}
          type="text"
          name="name"
          value={name}
          id={this.labelNameId}
          onChange={this.handleChange}
        />
        <label htmlFor={this.labelNumberId}>Number</label>
        <input
          className={style.input_form_phonebook}
          type="text"
          name="number"
          value={number}
          id={this.labelNumberId}
          onChange={this.handleChange}
        />
        <button className={style.button_form_phonebook}>Add contact</button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  style: PropTypes.object.isRequired,
  contacts: PropTypes.array.isRequired,
  addContact: PropTypes.func.isRequired
};

export default ContactForm;
