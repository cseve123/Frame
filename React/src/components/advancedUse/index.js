import { Component } from 'react';
// import UncontrolledUse from './UncontrolledUse'
// import PortalUse from './PortalUse'
// import ContextUse from './ContextUse'
import LazyUse from './LazyUse'

class AdvancedUse extends Component {
    render () {
        return <div>
            {/* <UncontrolledUse /> */}
            {/* <PortalUse /> */}
            {/* <ContextUse /> */}
            <LazyUse />
        </div>
    }
}

export default AdvancedUse