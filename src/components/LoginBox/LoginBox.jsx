import { Component } from "react"; 
import './LoginBox.css';

class LoginBox extends Component{
    render(){
        return(
            <div className="login-box">
                <div>
                    <label htmlFor="username">Username :</label>
                    <input type="text" id="username" />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" />
                </div>
            </div>
        )
    }
}

export default LoginBox;