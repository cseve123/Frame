import { Component } from 'react';
import ReactDOM from 'react-dom'

class PortalUse extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return ReactDOM.createPortal(
            <div>
                <h1>Portal Use</h1>
                {this.props.children}
            </div>,
            document.body
        )
    }

}
export default PortalUse