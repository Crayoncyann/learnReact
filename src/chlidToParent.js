import React from 'react'

import './comm.css'

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: '',
        }
    }

    handleChange = (data) => {
        // 子组件的 state
        this.setState(data)
    }

    render() {
        return (
            <div className='comm-div'>
                <h2>子组件 -> 父组件</h2>
                <Child callback={this.handleChange.bind(this)} />
                <p>comm is: {this.state.info}</p>
            </div>
        )
    }
}

class Child extends Parent {
    constructor(props) {
        super(props)
        this.state = {
            info: 'chlidComponent',
        }
    }

    onClick = () => {
        // 把子组件的 state 回调给父组件
        this.props.callback({info: this.state.info})
    }

    render() {
        return (
            <div>
                <button onClick={this.onClick}>点击获取子组件数据</button>
            </div>
        )
    }
}

export default Parent
