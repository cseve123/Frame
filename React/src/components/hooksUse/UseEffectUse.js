import { useState, useEffect } from 'react';
function UseEffectUse () {
    const [count] = useState(0)
    const [name] = useState('defaultName')
    // 模拟class组件的didmount和Didupdate
    useEffect(() => {
        console.log('didmount, didupdate')
    })

    // 模拟class组件的DidMount
    useEffect(() => {
        console.log("DidMount 加载完了")
    }, [])  // [] 不依赖于任何state
    
    // 模拟class组件的DidUpdate
    useEffect(() => {
        console.log("DidUpdate 更新了")
        console.log(count, name)
        return () => {
            console.log('无论更新还是卸载都会执行')
        }
    }, [count, name])

    useEffect(() => {
        // let timeId = window.setInterval(() => {
        //     console.log(Date.now())
        // }, 1000)
        // 返回一个函数 模拟willUnMount
        return () => {
            // window.clearInterval(timeId)
        }
    }, [])
    return <div>useEffect</div>
}
export default UseEffectUse