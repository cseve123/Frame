import { Component } from 'react'

class FormUse extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'ming',
            info: '个人信息',
            city: 'shanghai',
            flag: true,
            gender: 'male'
        }
    }
    render () {
        // return <div>
        //     {/* 受控组件---input和state关联起来 */}
        //     <p>{this.state.name}</p>
        //     {/* htmlFor 代替了 for */}
        //     <label htmlFor="inputName">姓名</label>
        //     <input id="inputName" value={this.state.name} onChange={this.onInputChange} />
        // </div>

        // textarea
        // return <div>
        //     <textarea value={this.state.info} onChange={this.onTextareaChange}></textarea>
        //     <p>{this.state.info}</p>
        // </div>

        // select
        // return <div>
        //     <select value={this.state.city} onChange={this.onSelectChange}>
        //         <option value="beijing">北京</option>
        //         <option value="shanghai">上海</option>
        //         <option value="guangdong">广东</option>
        //     </select>
        //     <p>{this.state.city}</p>
        // </div>

        // checkbox
        // return <div>
        //     <input type="checkbox" checked={this.state.flag} onChange={this.onChecboxChange} />
        //     <p>{this.state.flag.toString()}</p>
        // </div>

        // radio
        return <div>
            male <input type="radio" name="gender" value="male" checked={this.state.gender === 'male'} onChange={this.onRadioChange} />
            female <input type="radio" name="gender" value="female" checked={this.state.gender === 'female'} onChange={this.onRadioChange} />
            <p>{this.state.gender}</p>
        </div>
    }

    onInputChange = (e) => {
        // 双向绑定的实现
        this.setState({
            name: e.target.value
        })
    }

    onTextareaChange = (e) => {
        this.setState({
            info: e.target.value
        })
    }

    onSelectChange = (e) => {
        this.setState({
            city: e.target.value
        })
    }

    onChecboxChange = (e) => {
        this.setState({
            flag: !this.state.flag
        })
    }

    onRadioChange = (e) => {
        this.setState({
            gender: e.target.value
        })
    }

}

export default FormUse
