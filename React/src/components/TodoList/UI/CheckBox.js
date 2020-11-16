import React from 'react';
class CheckBox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false
        }
    }
    render() {
        return <input 
            type="checkbox"
            checked={this.state.checked}
            onChange={this.onCheckboxChange}
        />
    }
    onCheckboxChange = () => {
        const newval = !this.state.checked
        this.setState({
            checked: newval
        })
        // 传给父组件
        this.props.onChange(newval)
    }
}
export default CheckBox