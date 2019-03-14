import {connect} from 'react-redux';
import Filter from '../components/Filter';
import {doSetFilter} from '../actions';

const mapDispatchToProps = dispatch => ({
    onSetFilter: filterType => dispatch(doSetFilter(filterType))
});

const ConnectedFilter = connect(null, mapDispatchToProps)(Filter);
export default ConnectedFilter;