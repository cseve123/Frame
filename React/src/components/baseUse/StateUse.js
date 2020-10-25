import { Component } from 'react';
class StateUse extends Component {
    constructor(props) {
        super(props)
        // state定义再constructor
        this.state = {
            count: 0
        }
    }

    render() {
        return <div>
            <p>{this.state.count}</p>
            <button onClick={this.increase}>累加</button>
        </div>
    }
    increase = () => {
        // 不能直接修改state，使用不可变值
        // 不可变值，意思不能对之前得数据有影响，返回新得数据（副本）
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {
        //     // 回到函数，相当于vue.$nextTick
        //     console.log('count by callback', this.state.count)
        // })
        // // 立马打印，得到得是0，说明是异步的
        // console.log('count', this.state.count) // 0

        // setTiemout中setState是同步的
        // setTimeout(() => {
        //     this.setState({
        //         count: this.state.count + 1
        //     })
        //     console.log('count in setTimeout', this.state.count)
        // }, 0)

        // 不可变值 - 数组
        // const list5Copy = this.state.list.slice()
        // list5Copy.splice(2, 0, 'a')
        // this.setState({
        //     lis1: this.state.list1.concat(100), // 追加
        //     list2: [...this.state.list2, 100], //追加
        //     list3: this.state.list3.slice(0, 3), // 截取
        //     list4: this.state.list4.filter(item => item > 10), // 筛选
        //     list5: list5Copy // 其他操作
        // })

        // 不可变值 - 对象
        // this.setState({
        //     obj1: Object.assign({}, this.state.obj1, {a: 100}),
        //     obj2: {...this.state.obj2, a: 100}
        // })

        // 传入对象，会被合并，执行结果只一次
        // 类似Object.assign
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })
        // this.setState({
        //     count: this.state.count + 1
        // })

        // 传入函数，不会被合并
        this.setState((prevState, props)=> {
            return {
                count: prevState.count + 1
            }
        })
        this.setState((prevState, props)=> {
            return {
                count: prevState.count + 1
            }
        })
        this.setState((prevState, props)=> {
            return {
                count: prevState.count + 1
            }
        })
    }
    bodyClickHandler = () => {
        this.setState({
            count: this.state.count + 1
        })
        console.log('count in body Evnet', this.state.count)
    }
    componentDidMount() {
        // 自定义DOM事件，setState是同步的
        // document.body.addEventListener('click', this.bodyClickHandler)
    }
    componentWillUnmount() {
        // 和vue一样自己定义的事件，再销毁前注销 DOM事件 setTimeout
        // document.body.removeEventListener('click', this.bodyClickHandler)
    }
}
export default StateUse