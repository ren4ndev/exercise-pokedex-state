import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    return (
      <div className="pokedex">
        <Pokemon pokemon={this.props.pokemons[this.props.index]} />
      </div>
    );
  }
}

export default Pokedex;
