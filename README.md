# learnReact


## 学习 React 中 ...


![React](http://yiming465.com/wp-content/uploads/2016/09/9FF923C456668F2850BE562B46A84414.png)

- 1.23 发现个博客, [React 全家桶教学](http://blog.csdn.net/awaw00) 有时间的话跑一跑, 后端还是用 Node.js 构造好一点, 顺便搭一个 MongoDB

- React 是声明式, 组件化, 高效, 灵活 的前端框架

- React 是通过 Virtual DOM 来渲染 UI, 当组件状态改变时, React 会调用组件的 reader 重新渲染

- state 和 props

> 组件的 state 是保存组件的状态, 只能通过组件内部的 setState(xx, callback)修改, 当 state 改变时 UI 重新渲染  
> 组件的 props 是外部传来的参数, 主要用来组件件的通信  
> 多用 props, 少用 state, 多写无状态组件

练习写了一个 Markdown, 学习状态驱动是怎么个情况, 实例如下

![screenshots](https://github.com/Crayoncyann/learnReact/blob/master/screenshots/md.gif)

---

- component 的生命周期

> componentWillMount() - render 前执行  
> componentDidMount() - 在 render 后执行，只执行一次, this.getDOMNode() 访问 DOM  
> componentWillReceiveProps() - 接收 props 执行  
> componentWillUpdate() - 接收 props 或 setState 并且, render 还没渲染时执行  
> shouldComponentUpdate() - 接收 props 或 setState 时执行, return 一个布尔值, 组件不更新时使用  
> componentDidUpdate() - 更新后执行  
> componentWillUnmount() - 组件移除后, 只执行一次

定时器只用到了 componentDidMount(), componentWillUnmount()

![定时器](https://github.com/Crayoncyann/learnReact/blob/master/screenshots/lifecycle.gif)

---

- 组件的通信

> 父组件 -> 子组件
>
> 通过父组件的 props 向子组件传递数据, 子组件调用数据并重新渲染  
> 我理解的方法: 父组件 render 时, 把子组件的标签写好传递的数据
>
> 子组件 -> 父组件
>
> 把子组件的数据作为一个函数, 回调给父组件, 父组件获取并重新渲染  
> 我理解的方法: 子组件通过一个事件, 把 state 回调给父组件, 父组件在写子组件标签时, 需要写好回调函数, 再通过 bind 获取一个函数的引用  
> 看了下网上的实例, 大部分都是

网上大部分的实例都是填写信息时会用到子组件向父组件通信, 自己写了一个组件通信的 demo, 通过点击获取通信结果

![组件通信](https://github.com/Crayoncyann/learnReact/blob/master/screenshots/componpentComm.gif)

---

- React Router

> 实例参考: [Github - React Router](https://github.com/reactjs/react-router-tutorial/tree/master/lessons)  
> 教程参考: [阮一峰 - React Router](http://www.ruanyifeng.com/blog/2016/05/react_router.html)  
>
> Router 是一个容器, 真正的路由需要通过 Router 组件定义  
> Route path 是匹配的路径, 可以省略, component 是路由加载的组件  
> 通配符和标准的一样 : () * **  
> <Link> 和 HTML 中的 <a> 作用相同, Link to='xx'  
> 导入的时候尽量解构, 这样用起来方便 eg: import {Router, Route, Link, anyone...} from 'react-router'
> hashHistroy 是动态路由的关键... 还有 browserHistory(需要后端处理)、 memoryHistory(服务器)

**Mark** 一下, 不是很懂, 跑了一遍实例也不知道具体应用在哪些地方
