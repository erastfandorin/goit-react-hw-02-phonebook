import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import ContactFormContainer from './ContactForm/ContactFormContainer';
import FilterContainer from './Filter/FilterContainer';
import ContactListContainer from './ContactList/ContactListContainer';
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
    const { contacts, filter } = this.props;

    return (
      <>
        <CSSTransition
          in={this.loadLogo}
          timeout={50000}
          classNames={slideLogo}
        >
          <h1 className={logoPhonebook}>Phonebook</h1>
        </CSSTransition>
        <ContactFormContainer />
        <FilterContainer handleChange={this.handleChange} />
        <ContactListContainer
          filterContacts={this.filterContacts(contacts, filter)}
        />
      </>
    );
  }
}

App.propTypes = {
  addContactWithLocalhost: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  filter: PropTypes.string.isRequired,
};

export default App;
