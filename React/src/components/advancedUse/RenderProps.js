import React from 'react';
import PropTypes from 'prop-types'

class Mouse extends React.Component {
    constructor(props) {
        super(props)
        this.state = {x: 0, y: 0}
    }
    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render(){
        return (<div style={{height: '500px'}} onMouseMove={this.handleMouseMove}>
            {/* 将当前 state作为props，传递给render（render是函数组件） */}
            {this.props.render(this.state)}
        </div>)
    }
}
Mouse.propTypes = {
    render: PropTypes.func.isRequired
}
const RenderProps = (props) => (
    <div style={{height: '500px'}}>
        <Mouse render={
            // render是一个函数组件
            ({x, y}) => <h1>The mouse position is ({x}, {y})</h1>
        } />
    </div>
)
export default RenderProps