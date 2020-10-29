import React, { Component } from 'react';
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

// PureComponent 隐式shouldComponentUpdate
class List extends React.PureComponent {
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

class Footer extends Component {
    constructor(props) {
        super(props)
        this.state={}
    }
    render() {
        return <p>
            {this.props.text}
        </p>
    }
    componentDidUpdate() {
        console.log('Footer component update')
    }
    // 因为父组件更新，子组件必然更新，但footer组件实则没有变化不需要更新
    shouldComponentUpdate(nextProps, nextState)  {
        if (nextProps.text !== this.props.text)  {
            return true // 只有当值变化时才更新
        }
        return false // 不重复渲染
    }
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
            ],
            footerInfo: '底部'
        }
    }
    render() {
        return <div>
            {/* props接收函数 */}
            <Input subTitle={this.InputSubTitle} />
            {/* props接收数据 */}
            <List list={this.state.list} />
            {/* Footer组件不需要更新 */}
            {/* 但React父组件更新，子组件无条件更新 */}
            <Footer text={this.state.footerInfo} />
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