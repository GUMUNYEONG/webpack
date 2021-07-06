const React = require('react')

class LoginBox extends React.Component{
    state = {
        userid: "",
        userpw : ""
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name]:e.target.value })
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.props.onCteate(this.state)
        this.setState({
            userid: "",
            userpw:"",
        })
    }

    render(){
        return(
            <form>
                <input 
                    onSubmit = {this.handleSubmit}
                    type = "text"
                    placeholder="아이디를 입력해주세요"
                    value={this.state.userid}
                    inChange = {this.handleChange}
                    name="userid"
                />    
                <input 
                    type = "password"
                    placeholder="ㅍㅐ스워드를 입력해주세요"
                    value={this.state.password}
                    name="userpw"
                />
                <button type="submit">로그인</button>
            </form>
        )
    }
} 

module.exports = LoginBox


class App extends React.Component{
    
    loginInfo = (data) =>{
        conosle.log(data)
    }
    
    render(){
        return(
            <div>
                <LoginBox onCreate={this.loginInfo}/>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)
