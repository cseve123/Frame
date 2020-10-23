import { Component } from 'react';
import './style.css'
class JsxUse extends Component {
    constructor (props) {
        super(props)
        // 数据是同步还是异步了？？？
        this.state = {
            name: '战士',
            imgUrl: 'https://th.bing.com/th/id/OIP.EAreM6tmHv2qKO-wKG0bgAHaDy?pid=Api&rs=1',
            flag: true
        }
    }
    render () {
        // 获取变量 this.state.xxx
        // const pElem = <p>{this.state.name}</p>
        // return pElem
        
        // 表达式 {}
        // const exprElem = <p>{this.state.flag ? 'yes' : 'no'}</p>
        // return exprElem

        // 子元素 src={}
        // const imgElem = <div>
        //         <p>我的头像</p>
        //         <img src={this.state.imgUrl} alt="img" />
        //     </div>
        // return imgElem

        // class className
        // const classElem = <p className="title">设置 css class</p>
        // return classElem

        // style
        // const styleData = {
        //     fontSize: '24px',
        //     color: 'blue',
        //     textAlign: 'center'
        // }
        // const styleElem = <p style={styleData}>设置 css style</p>
        // return styleElem

        // 原生html
        // const rawHtml = `
        //     <span>
        //         富文本内容
        //         <i>斜体</i>
        //         <b>加粗</b>
        //     </span>
        // `
        // const rawHtmlData = {
        //     __html: rawHtml // 防止xss,react必须的格式
        // }
        // const rawHtmlElem = <div>
        //     {/* 防止xss注入,依法管用 */}
        //     <p dangerouslySetInnerHTML={rawHtmlData}></p>
        //     {/* 直接输出也会做转义<> */}
        //     <p>{rawHtml}</p>
        // </div>
        // return rawHtmlElem

        // 子组件
        // 同vue一样
        return 'ddddd'
    }
}
export default JsxUse