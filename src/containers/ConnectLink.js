import {connect} from 'react-redux'
import {doSetFilter} from '../actions'
import Link from '../components/Link'

// 将当前redux store state映射到 展示组件的props
const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.filter
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(doSetFilter(ownProps.filter))
})

const ConnectLink = connect(mapStateToProps, mapDispatchToProps)(Link);

export default ConnectLink;