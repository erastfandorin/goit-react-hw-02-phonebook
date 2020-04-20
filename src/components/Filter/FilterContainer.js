import { connect } from 'react-redux';
import Filter from './Filter';

const mapStateToProps = state => ({
  contacts: state.phoneBook.contacts,
  filter: state.phoneBook.filter,
});

export default connect(mapStateToProps)(Filter);
