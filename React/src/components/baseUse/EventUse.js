import { Component } from 'react';

class EventUse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'zhangsan',
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

        // 修复方法里的this
        // this.clickHander1 = this.clickHander1.bind(this)

    }
    render () {
        // this --用bind
        // return <p onClick={this.clickHandler1}>
        //     {this.state.name}
        // </p>

        // this使用静态方法 ()=> {}
        // return <p onClick={this.clickHandler2}>
        //     clickHandler2 {this.state.name}
        // </p>

        // event
        // return <a href="https://imooc.com" onClick={this.clickHandler3}>
        //     click me
        // </a>

        // 传递参数
        // 有参数的不能用静态方法，必须再onClick里取bind
        return <ul>
            {this.state.list.map((item, index) => {
                // 可以通过this.clickHandler4.bind(this, xxx)
                // 也可以通过()=> this.clickHandler4   这个不用每次bind，感觉会好一些
                return <li key={item.id} onClick={() => this.clickHandler4(item.id, item.title)}>
                    index {index}; title {item.title}
                </li>
            })}
        </ul>
    }
    clickHandler1() {
        // 原型里的默认this是 undefined    
        console.log(this) // undefined
        this.setState({
            name: 'lisi'
        })
    }
    // 静态方法，this指向当前实例
    clickHandler2 = () => {
        this.setState({
            name: 'lisi'
        })
    }

    // 获取event
    clickHandler3 = (id, title, event) => {
        event.preventDefault()
        event.stopPropagation()
        console.log('target', event.tartet) // 当前元素
        console.log('current target', event.currentTarget) // 当前元素，假象!!!
        console.log('event', event) // SyntheticBaseEvent  不是原生event,是react封装的
        console.log('event.__proto__.constructor', event.__proto__.constructor)

        // 原生 event __proto__.constructor 是MouseEvent
        // event.nativeEvent
        console.log('nativeEvent', event.nativeEvent)
        console.log('nativeEvent target', event.nativeEvent.target) // 当前元素
        console.log('nativeEvent current target', event.nativeEvent.currentTarget) // 指向根元素 #app document

        // 1. event 是 SyntheticEvent 模拟出来的
        // 2. event.nativeEvent是原生事件对象
        // 3. 所有的事件，都被挂载到document上
        // 4. 和DOM不一样，和vue事件也不一样
    }

    // 传递参数
    // event会追加到最后一个
    clickHandler4 = (id, title, event) => {
        console.log('>>>>>>>>>>>', this)
        console.log(id, title)
        console.log('clickHandler4 event', event)
    }
}

export default EventUse