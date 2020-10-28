import React, { Component } from 'react';

// 引入动态组件React.lazy + import
const ContextUse = React.lazy(()=> import('./ContextUse'))
class LazyUse extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return <div>
            <p>引入一个动态组件</p>
            <hr />
            {/* 嵌入动态组件 React.Suspense */}
            <React.Suspense fallback={<div>Loading...</div>}>
                <ContextUse />
            </React.Suspense>
        </div>
    }
}
export default LazyUse