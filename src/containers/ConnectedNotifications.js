import {connect} from 'react-redux';
import Notifications from '../components/Notifications';

// 返回由对象属性值组成的数组 Object.key()返回自身可枚举属性
const getArrayOfObject = (object) =>
    Object.keys(object).map(key => object[key])


const getNotifications = (state) =>
    getArrayOfObject(state.notificationState)

// 获取对象属性值组成的数组
const mapStateToProps = (state) => ({
    notifications: getNotifications(state)
});

const ConnectedNotifications = connect(mapStateToProps)(Notifications);
export default ConnectedNotifications;