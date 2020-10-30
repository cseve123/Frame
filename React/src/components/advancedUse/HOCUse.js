import React from 'react';

// 高阶组件
const HOCUse = (Component) => {
    class HOCUseComponent extends React.Component {
        constructor(props){
            super(props)
            this.state = {x: 0, y: 0}
        }
        handleMouseMove = (event) =>{
            this.setState({
                x: event.clientX,
                y: event.clientY
            })
        }
        render() {
            return <div style={{height: '500px'}} onMouseMove={this.handleMouseMove}>
                {/* 1.透传所有的props 2，增加了mouse属性 */}
                <Component {...this.props} mouse={this.state} />
            </div>
        }
    }
    return HOCUseComponent
}

const UseApp = (props) => {
    const {x, y} = props.mouse // 接收mouse属性
    return <div style={{height:'500px'}}>
        <h1>The mouse position is ({x}, {y})</h1>
    </div>
}

export default HOCUse(UseApp)