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
    this.loadLogo = true;
  }

  componentDidUpdate(prevProps) {
    const { contacts } = this.props;
    if (prevProps !== this.props) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

  render() {
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
        <FilterContainer />
        <ContactListContainer />
      </>
    );
  }
}

App.propTypes = {
  addContactWithLocalhost: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default App;
