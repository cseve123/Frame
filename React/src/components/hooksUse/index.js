import { Component } from 'react';
// import UseStateUse from './UseStateUse'
// import UseEffectUse from './UseEffectUse'
// import UseRefUse from './UseRefUse'
// import UseContextUse from './UseContextUse'
// import UseReducerUse from './UseReducerUse'
// import UseMemoUse from './UseMemoUse'
// import UseCallbackUse from './UseCallbackUse'
import SelfHookUse from './SelfHookUse'
class HooksUse extends Component {
    constructor (props) {
        super(props)
        this.state = {}
    }
    render () {
        return <div>
            {/* <UseStateUse /> */}
            {/* <UseEffectUse /> */}
            {/* <UseRefUse /> */}
            {/* <UseContextUse /> */}
            {/* <UseReducerUse /> */}
            {/* <UseMemoUse /> */}
            {/* <UseCallbackUse /> */}
            <SelfHookUse />
        </div>
    }
}
export default HooksUse