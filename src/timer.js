import React from 'react'

import './timer.css'

class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            elapsed: 0,
        }
    }

    tick = () => {
        // 把上一个状态当做参数
        this.setState(prevState => ({
            elapsed: prevState.elapsed + 1
        }))
    }
    // render后立即执行
    componentDidMount = () => {
        this.interval = setInterval(() => this.tick(), 1000)
    }
    // 组件 unmount 后执行
    componentWillUnmount = () => {
        clearInterval(this.interval)
    }

    render() {
        return (
            <div className='react-timer'>
                <div className='timer-tick'>计时: {this.state.elapsed} 秒</div>
            </div>
        )
    }
}

export default Timer
