import React from 'react';
import { Input, Button, List } from 'antd';

// 无状态组件性能比较高
const TodoListUI = (props) => (
    <div style={{ margin: "10px" }}>
        <div>
            <Input
                value={props.inputValue}
                placeholder="请输入"
                style={{ maxWidth: "500px", marginRight: "10px" }}
                onChange={props.handleInputChange}
            />
            <Button
                type="primary"
                onClick={props.handleBtnClick}
            >提交</Button>
        </div>
        <div style={{ marginTop: "10px", maxWidth: "500px" }}>
            <List
                bordered
                dataSource={props.list}
                renderItem={
                    (item, index) => (
                        <List.Item onClick={() => props.handleItemDelete(index)}>
                            {item}
                        </List.Item>)}
            />
        </div>
    </div>
);

// class TodoListUI extends Component {
//     render() {
//         return (
//             <div style={{ margin: "10px" }}>
//                 <div>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder="请输入"
//                         style={{ maxWidth: "500px", marginRight: "10px" }}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button
//                         type="primary"
//                         onClick={this.props.handleBtnClick}
//                     >提交</Button>
//                 </div>
//                 <div style={{ marginTop: "10px", maxWidth: "500px" }}>
//                     <List
//                         bordered
//                         dataSource={this.props.list}
//                         renderItem={
//                             (item, index) => (
//                                 <List.Item onClick={() => this.props.handleItemDelete(index)}>
//                                     {item}
//                                 </List.Item>)}
//                     />
//                 </div>
//             </div>
//         )
//     }
// }

export default TodoListUI;