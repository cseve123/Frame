import React from 'react';
// import JsxUse from './JsxUse'
// import ConditionUse from './ConditionUse'
// import ListUse from "./ListUse";
// import EventUse from './EventUse'
import FormUse from './FormUse'

class BaseUse extends React.Component {
    // constructor (props) {
    //     super(props)
    // }
    render () {
        return <div>
            {/* <JsxUse /> */}
            {/* <ConditionUse /> */}
            {/* <ListUse /> */}
            {/* <EventUse /> */}
            <FormUse />
        </div>
    }
}

export default BaseUse