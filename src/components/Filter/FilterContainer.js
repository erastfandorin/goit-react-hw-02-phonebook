import { connect } from 'react-redux';
import * as contactsSelectors from '../../redux/contactsSelectors';
import * as contactAction from '../../redux/contactsActions';
import Filter from './Filter';

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
  filter: contactsSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilter: findValue => dispatch(contactAction.changeFilter(findValue)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
