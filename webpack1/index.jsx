

//import React from 'react'; 이런식으로 씀

//import << 자바스크립트가 버전업되면서 생김. 애는 node.js 처리 안됨
//require << 얘는 node.js 됨 

import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import LoginBox from './loginBox.jsx' 

class App extends Component{
    render(){
        return(
            // React.createElement('div',null,'hello webpack')
            //아 이게 웹팩이 바벨을 못읽으니까 이렇게 써준거군.. 이제 세팅했으니까 읽을 수 있음
            <>
            <div>Hello Webpack!!!</div>
            <LoginBox/>
            </>
        )
    }
} 

ReactDOM.render(
    <App/>,
    document.querySelector('#root')
)