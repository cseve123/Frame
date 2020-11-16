import React from 'react';
import List from './List'
import InputItem from './InputItem'
// 容器组件（只管数据）
class TodoList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 1,
                    title: '标题1',
                    completed: false
                },
                {
                    id: 2,
                    title: '标题2',
                    completed: false
                },
                {
                    id: 3,
                    title: '标题3',
                    completed: false
                }
            ]
        }
    }
    render() {
        return <div>
            {/* 输入UI组件 */}
            <InputItem
                addItem={this.addItem}
            />
            {/* 列表UI组件 */}
            <List
                list={this.state.list}
                toggleCompleted={this.toggleCompleted}
                deleteItem={this.deleteItem}
            />
        </div>
    }
    // 切换完成状态
    toggleCompleted = (id) => {
        this.setState({
            list: this.state.list.map(item => {
                const completed = item.id === id 
                    ? !item.completed
                    : item.completed
                return {
                    ...item,
                    completed
                }
            })
        })
    }
    // 删除一项
    deleteItem = (id) => {
        this.setState({
            list: this.state.list.filter(item => item.id !== id)
        })
    }
    // 新增一项
    addItem = (title) => {
        const list = this.state.list
        this.setState({
            list: list.concat({
                id: Math.random().toString().slice(-5),
                title,
                completed: false
            })
        })
    }
}
export default TodoList