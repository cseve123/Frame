import { Component } from 'react'

class ListUse extends Component {
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
    render () {
        return <ul>
            {this.state.list.map((item, index) => {
                // key 和vue的key类似的原理，不能是index 或random
                return <li key={item.id}>index {index}; title {item.title}</li>
            })}
        </ul>
    }
}

export default ListUse
