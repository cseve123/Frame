import React, {useState, memo, useMemo, useCallback} from 'react';
// memo 相当于PureComponent
const Child = memo(({userInfo, onChange}) => {
    console.log('Child render...', userInfo)
    return <div>
        <p>This is Child {userInfo.name} {userInfo.age}</p>
        <input onChange={onChange} />
    </div>
})

// 父组件
function App () {
    console.log('Parent render...')
    const [count, setCount] = useState(0)
    const [name] = useState('defaultName')

    // 用useMemo缓存数据，有依赖，name变化时缓存失效
    const userInfo = useMemo( () => {
        return {name, age: 21}
    }, [name])
    // 用useCallback缓存函数
    const onChange = useCallback( e => {
        console.log(e.target.value)
    }, [])
    return <div>
        <p>
            useMemo demo
            <button onClick={() => setCount(count + 1)}>click</button>
        </p>
        <Child userInfo={userInfo} onChange={onChange}></Child>
    </div>
}
export default App