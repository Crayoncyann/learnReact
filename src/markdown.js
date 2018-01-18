import React from 'react'
import Remarkable from 'remarkable'

import './markdown.css'

class Markdown extends React.Component {
    constructor(props) {
        super(props)
        // this.handleChange = this.handleChange.bind(this)
        // 不绑定就用箭头函数
        var mdString = '输入 **Markdown 语法** 可以看到效果'
        this.state = {
            value: mdString,
        }
    }
    // 输入改变状态
    handleChange = () => {
        var state = {
            value: this.refs.input.value
        }
        this.setState(state)
    }
    // *** __html
    getRawMarkup = () => {
        var md = new Remarkable()
        return {
            __html: md.render(this.state.value)
        }
    }

    render() {
        return (
            <div className='Markdown'>
                <div className='editor'>
                    <h2 className='title'>编辑器</h2>
                    <textarea
                        ref='input'
                        rows='35'
                        onChange={this.handleChange}
                        defaultValue={this.state.value}
                    />
                </div>
                <div className='show'>
                    <h2 className='title'>预览</h2>
                    <div
                      className="content"
                      dangerouslySetInnerHTML={this.getRawMarkup()}
                    />
                </div>
            </div>
        )
    }
}
// 加上 default, 要不然导入时还得解构
export default Markdown
