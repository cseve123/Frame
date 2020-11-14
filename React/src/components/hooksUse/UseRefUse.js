import { useRef, useEffect } from 'react';
function UseRefUse () {
    const btnRef = useRef(null) // 初始值
    useEffect(() => {
        console.log(btnRef.current)  // DOM节点
    }, [])
    return <div>
        <button ref={btnRef}>click</button>
    </div>
}
export default UseRefUse