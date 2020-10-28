import React, { Component } from 'react';

// 创建Context填入默认值（任何一个js变量）
const ThemeContext = React.createContext('light')

// 函数组件-使用context
function ThemeLink(props) {
    return <ThemeContext.Consumer>
        { value => <p>link's theme is {value}</p> }
    </ThemeContext.Consumer>
}


class ThemeButton extends Component {
    // 指定contextType
    // static contextType = ThemeContext
    render() {
        // 往上找Provider
        const theme = this.context
        return <div>
            <p>button's theme is {theme}</p>
        </div>
    }
}
// 指定contextType
ThemeButton.contextType = ThemeContext

// 不论多层级的组件
function Toolbar (props) {
    return (
        <div>
            <ThemeButton />
            <ThemeLink />
        </div>
    )
}

class ContextUse extends Component {
    constructor(props){
        super(props)
        this.state={
            theme: 'light'
        }
    }
    render() {
        // 父组件提供服务
        return <ThemeContext.Provider value={this.state.theme}>
            <Toolbar />
            <hr />
            <button onClick={this.changeTheme}>change theme</button>
        </ThemeContext.Provider>
    }
    changeTheme = () => {
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light'
        })
    }
}

export default ContextUse