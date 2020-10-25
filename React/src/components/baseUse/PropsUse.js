import { Component } from 'react';
import PropTypes from 'prop-types';  // 类型检查

class Input extends Component {
    constructor(props) {
        super(props)
        this.state={
            title: ''
        }
    }
    render() {
        return <div>
            <input value={this.state.title} onChange={this.onTitleChange} />
            <button onClick={this.onSubmit}>提交</button>
        </div>
    }
    onTitleChange = (e) => {
        this.setState({
            title: e.target.value
        })
    }
    onSubmit = () => {
        // 发送组件
        const { subTitle } = this.props
        subTitle(this.state.title)
        this.setState({
            title: ''
        })
    }

}

// props 类型检查
Input.propTypes = {
    subTitle: PropTypes.func.isRequired
}

class List extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {
        const { list }  = this.props

        return <ul>
            {list.map((item, index) => {
                return <li key={item.id}>
                    {item.title}
                </li>
            })}
        </ul>
    }
}

// 类型检查
List.propTypes = {
    list: PropTypes.arrayOf(PropTypes.object).isRequired
}

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 'id-1',
                    title: '标题1'
                },
                {
                    id: 'id-2',
                    title: '标题2'
                },
                {
                    id: 'id-3',
                    title: '标题3'
                }
            ]
        }
    }
    render() {
        return <div>
            {/* props接收函数 */}
            <Input subTitle={this.InputSubTitle} />
            {/* props接收数据 */}
            <List list={this.state.list} />
        </div>
    }
    InputSubTitle = (title) => {
        // list 赋值是新数组，不能用push
        // this.setState({
        //     list: this.state.list.push({
        //         id: `id-${Date.now()}`,
        //         title
        //     })
        // })
        this.setState({
            list: this.state.list.concat({
                id: `id-${Date.now()}`,
                title
            })
        })
    }
}

export default TodoList