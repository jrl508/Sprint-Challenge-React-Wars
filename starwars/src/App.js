import React, { Component } from 'react';
import './App.css';
import CharList from './components/CharList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    const { starwarsChars } = this.state;

    return (
      <div className="App">
        <img src="https://fontmeme.com/permalink/190531/8fc4ce87bbb475dff2db8b8d23caa350.png" alt="star-wars-font" border="0" className="header"/>

        <CharList starwarsChars={starwarsChars}/>
      </div>
    );
  }
}

export default App;
