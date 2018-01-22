import React from 'react'
import Remarkable from 'remarkable'

import './markdown.css'

class Markdown extends React.Component {
    constructor(props) {
        super(props)
        // this.handleChange = this.handleChange.bind(this)
        // 不绑定就用箭头函数绑
        var mdString = '输入 **Markdown 语法** 可以看到效果'
        this.state = {
            value: mdString,
        }
    }
    // 输入改变状态
    handleChange = () => {
        var state = {
            // 获取真实 DOM
            value: this.refs.input.value
        }
        this.setState(state)
    }
    // *** __html
    getRawMarkup = () => {
        var md = new Remarkable()
        return {
            // react 要求的写法, 坑
            __html: md.render(this.state.value)
        }
    }

    render() {
        return (
            <div className='react-md'>
                <h2>一个 Markdown 编辑器</h2>
                <div className='md-div editor'>
                    <h2 className='title'>编辑器</h2>
                    <textarea
                        className='md-css'
                        ref='input'
                        onChange={this.handleChange}
                        defaultValue={this.state.value}
                    />
                </div>
                <div className='md-div show'>
                    <h2 className='title'>预览</h2>
                    <div
                      className="md-css md-content"
                      dangerouslySetInnerHTML={this.getRawMarkup()}
                    />
                </div>
            </div>
        )
    }
}
// 加上 default, 要不然导入时还得解构
export default Markdown
