import React, { Component } from 'react';
class UncontrolledUse extends Component {
    constructor(props){
        super(props)
        this.state = {
            name: 'xiaoxiao',
            flag: true
        }
        // 创建ref 同Vue.$ref一样的获取DOM
        this.nameInputRef = React.createRef()
        this.fileInputRef = React.createRef()
    }
        render () {
        return <div>
            <input defaultValue={this.state.name} ref={this.nameInputRef} />
        </div>
    }
}
export default UncontrolledUse