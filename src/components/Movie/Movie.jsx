import React, { Component } from "react"; 
import './Movie.css';
import Galery from "../Galerie/Galery";
import Button from "../Button/Button";
import Synopsis from "../Synopsis/Synopsis";

class Movie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: true,
      cardBookmark: localStorage.getItem(this.props.index) === 'true' ? true : false // /!\ ici je peut pas réduire la condition car c'est une chaine de caratere
    };
  }

  isBookmark = () => {
    this.setState(prevState => ({ cardBookmark: !prevState.cardBookmark }), () => {
      localStorage.setItem(this.props.index, this.state.cardBookmark);
    });
  }

  showDescription = () => {
    this.setState({click : !this.state.click});
  }
  
  render() {
    const { url, title, year, rea, description} = this.props;
    return (
      <div className = {this.state.cardBookmark ? "card bookmark" : "card" }  >
        <div className="top">
          <div className="star" onClick={this.isBookmark}>
            {!this.state.cardBookmark ? 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-star" viewBox="0 0 16 16">
                <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
              </svg>
            :
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#a9a72fc2" className="bi bi-star-fill" viewBox="0 0 16 16">
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
              </svg>
            }
          </div>
          <div className="left-column">
            <Galery imgs={url} title={title} />
          </div>
          <div className="right-column">
            <div className="info">
              <h2>{title}</h2>
              <p>
                <strong>Année de sortie :</strong> {year}
              </p>
              <p>
                <strong>Réalisateur :</strong> {rea}
              </p>
            </div>
          </div>
        </div>
        <div className="down">
          <Synopsis state = {this.state.click} description = {description}/>
          {this.state.click ? <Button text="Voir plus" click = {this.showDescription} /> : ""} 
        </div>
      </div>
    );
  }
}

export default Movie;
