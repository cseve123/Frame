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
        // return <div>
        //     {/* ref 使用 default 而不是value */}
        //     <input defaultValue={this.state.name} ref={this.nameInputRef} />
        //     {/* state b并不会随着改变 */}
        //     <span>state.name: {this.state.name}</span>
        //     <br />
        //     <button onClick={this.alertName}>alert name</button>
        // </div>

        // return <div>
        //     <input
        //         type="checkbox"
        //         defaultValue={this.state.flag}
        //     />
        // </div>

        // file
        return <div>
            <input type="file" ref={this.fileInputRef} />
            <button onClick={this.alertFile}>alert File</button>
        </div>
    }
    alertName = () => {
        const elem = this.nameInputRef.current // 通过ref 获取 DOM
        alert(elem.value) // 不是state.name 而是DOM的值
    }
    alertFile = () => {
        const elem = this.fileInputRef.current
        console.log(elem.files)
    }
}
export default UncontrolledUse