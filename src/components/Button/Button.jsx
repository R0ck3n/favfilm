import { Component } from "react"; 
import './Button.css';


class Button extends Component{

  render(){
    const {id, text} = this.props
        return (
          <div className="button_container">
            <button id={id} className="btn" onClick={this.props.click}><span>{text}</span></button>
          </div>
        );
    }
}

export default Button;