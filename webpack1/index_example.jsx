//얘가 원래 index_example.jsx의 처음했던 파일~ 

const { createElement } = require('react');
const React = require('react');
const ReactDOM = require('react-dom');
const LoginBox = require("./loginBox.jsx")

class App extends React.Component{
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
    React.createElement(App),
    document.querySelector('#root')
)