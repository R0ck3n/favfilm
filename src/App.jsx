import React from 'react';
import './App.css';
import Header from './components/Header/Header.jsx';
import Movie from './components/Movie/Movie.jsx';
import movieData from './data/movieData.js';

class App extends React.Component {
  constructor(props) {

    super(props);
    this.moviesArray = movieData.map((movie, index) => (
      <Movie
        key={index}
        url={movie.posterUrl}
        title={movie.title}
        year={movie.year}
        rea={movie.director}
        description={movie.synopsis}
        index = {index}
      />
    ))

    this.state = {
      changeOrder : false
    };
  }

  changeOrder = () => {
    this.setState({changeOrder : !this.state.changeOrder});
    if (!this.state.changeOrder) {
      this.moviesArray.sort((a, b) => b.props.year - a.props.year);
    }else {
      this.moviesArray.sort((a, b) => a.props.year - b.props.year);
    }
    
  }
  
  render() {
    return (
      <div className="App">
        <Header title="FAVFILM" subtitle="Rocky story" changeOrder={this.changeOrder} state = {this.state.changeOrder}/>
        <main>
          {this.moviesArray}
        </main>
      </div>
    );
  }
}

export default App;
