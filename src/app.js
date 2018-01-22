import React from 'react'

import Markdown from './markdown.js'
import Timer from './timer.js'
import ParentToChlid from './parentToChild.js'
import ChlidToParent from './chlidToParent.js'

import './app.css'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showTimer: true,
        }
    }

    handleChange = () => {
        var show = !this.state.showTimer
        this.setState({showTimer: show})
        console.log(this.state.showTimer)
    }

    render() {
        var timer = this.state.showTimer ? <Timer /> : null
        return (
            <div className='react-domm'>
                <Markdown />
                <div className='comp-div'>
                    <h2>一个定时器</h2>
                    <button className='timer-show' onClick={this.handleChange}>计时器</button>
                    {timer}
                </div>
                <div className='comp-div'>
                    <h2>组件通信</h2>
                    <ParentToChlid />
                    <ChlidToParent />
                </div>
            </div>
        )
    }
}

export default App
