import React from 'react'

import Markdown from './markdown.js'
import Timer from './timer.js'

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
                <button className='timer-show' onClick={this.handleChange}>计时器</button>
                {timer}
            </div>
        )
    }
}

export default App
