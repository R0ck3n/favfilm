import { Component } from "react"; 
import './Galery.css';

class Galery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imgIndex : 0
    };
  }

  prevImg = () => {
    this.index = this.state.imgIndex
    this.indexLength = this.props.imgs.length
    if (this.index !== 0 ) this.index--
    this.setState({imgIndex : this.index})
  }

  nextImg = () => {
    this.index = this.state.imgIndex
    this.indexLength = this.props.imgs.length
    this.index++
    this.setState({imgIndex : this.index})
  }

  render() {
    return (
      <div className="gallery">
        <div onClick={this.prevImg}>
          {this.index > 0 ?
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left-circle" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"/>
            </svg> 
            :
            <div></div>
        }

        </div>
        <div>
          <img src={this.props.imgs[this.state.imgIndex]} alt={`Affiche de ${this.props.title}`} />
        </div>
        <div>
        {this.index + 1 !== this.indexLength ?
          <svg onClick={this.nextImg} xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-right-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8m15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0M4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5z"/>
          </svg>
        :
          <div></div>
        }
        </div>
      </div>
    );
  }
}

export default Galery;
