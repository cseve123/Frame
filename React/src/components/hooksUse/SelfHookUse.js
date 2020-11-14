import React from 'react';
import useAxios from './SelfHook'
function App() {
    const url = 'http://'
    const [loading, data, error] = useAxios(url)
    if (loading) {
        return <div>loading...</div>
    } else {
        return error 
        ? <div>{JSON.stringify(error)}</div>
        : <div>{JSON.stringify(data)}</div>
    }
}
export default  App