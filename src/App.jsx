import React from 'react';
import './App.css';
import pokemons from './data';
import Pokedex from './Pokedex';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.nextButton = this.nextButton.bind(this);
    this.typeButton = this.typeButton.bind(this);
    this.pokemonsList = this.pokemonsList.bind(this);
    this.state = {
      index: 0,
      type: 'Fire'
    }
  }

  nextButton() {
    if (this.state.index < this.pokemonsList().length - 1) {
      this.setState((previous, _props) => ({
        index: previous.index + 1
      }))
    } else {
      this.setState({
        index: 0
      })
    }    
  }

  typeButton(specie) {
    this.setState({
      type: specie
    })
  }

  pokemonsList() {
    return pokemons.filter(pokemon => {
      return pokemon.type === this.state.type;
    })
  }
  render() {
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={this.pokemonsList()} index={this.state.index}/>
        <button onClick={() => this.typeButton('Fire')}>Fire</button>
        <button onClick={() => this.typeButton('Psychic')}>Psychic</button>
        <button onClick={this.nextButton}>Next</button>
      </div>
    );
  }
  
}

export default App;