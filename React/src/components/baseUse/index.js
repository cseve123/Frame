import React from 'react';
// import JsxUse from './JsxUse'
// import ConditionUse from './ConditionUse'
// import ListUse from "./ListUse";
import EventUse from './EventUse'

class BaseUse extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    render () {
        return <div>
            {/* <JsxUse /> */}
            {/* <ConditionUse /> */}
            {/* <ListUse /> */}
            <EventUse />
        </div>
    }
}

export default BaseUse