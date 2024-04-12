import { Component } from "react"; 
import './Header.css';
import Button from "../Button/Button";

class Header extends Component{
    render(){
        const {title, subtitle, changeOrder, state} = this.props;
        return(
            <header className="App-header">
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
                <Button text={ state ? "↑" : "↓"} click = {changeOrder} />
            </header>
        )
    }
}

export default Header;
    