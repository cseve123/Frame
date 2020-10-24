import { Component } from 'react';

class ConditionUse extends Component {
    constructor(props){
        super(props)
        this.state = {
            theme: 'black'
        }
    }
    render () {
        const blackBtn = <button>black btn</button>    
        // const whiteBtn = <button>white btn</button>

        // if else 
        // if (this.state.theme === 'black') {
        //     return blackBtn
        // } else {
        //     return whiteBtn
        // }

        // 三元运算
        // return <div>
        //     {this.state.theme === 'black' ? blackBtn : whiteBtn}
        // </div>

        // &&
        return <div>
            {this.state.theme === 'black' && blackBtn}
        </div>
     
    }
}
export default ConditionUse