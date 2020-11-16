import React from 'react';
class Input extends React.Component {
    render() {
        return <input type="text" value={this.props.value} onChange={this.onChange} />
    }
    onChange = (e) => {
        const newVal = e.target.value
        this.props.onChange(newVal)
    }
}
export default Input