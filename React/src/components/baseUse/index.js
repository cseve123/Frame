import React from 'react';
import JsxUse from './JsxUse'

class BaseUse extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    render () {
        return <div>
            <JsxUse />
        </div>
    }
}

export default BaseUse