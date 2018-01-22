import React from 'react'

import './comm.css'

class Parent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            info: 'parentComponent',
        }
    }

    render() {
        return (
            <div className='comm-div'>
                <h2>父组件 -> 子组件</h2>
                <Child data={this.state.info} />
            </div>
        )
    }
}

class Child extends Parent {
    constructor(props) {
        super(props)
        this.state = {
            info: '',
        }
    }

    onClick = () => {
        // 从父组件获取 props
        this.setState({info: this.props.data})
    }

    render() {
        // 子组件获得 props, 重新渲染
        return (
            <div>
                <button onClick={this.onClick}>点击获取父组件数据</button>
                <p>comm is: {this.state.info}</p>
            </div>
        )
    }
}

export default Parent
