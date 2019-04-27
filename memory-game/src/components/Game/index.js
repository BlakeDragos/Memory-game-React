import React, { Component } from "react";
import Nav from "../Nav";
import Container from "../Container";
import Click from "../Click";
import data from "../../Data.json";

class Game extends Component {
  state = {
    data,
    pets: 0,
    mostPets: 0
  };

  componentDidMount() {
    this.setState({ data: this.Shuffle(this.state.data) });
  }

  handleCorrectGuess = newData => {
    const { mostPets, pets } = this.state;
    const newPets = pets + 1;
    const newMostPets = Math.max(newPets, mostPets);

    this.setState({
      data: this.Shuffle(newData),
      pets: newPets,
      mostPets: newMostPets
    });
  };

  handleIncorrectGuess = data => {
    this.setState({
      data: this.reset(data),
      pets: 0
    });
  };

  reset = data => {
    const reset = data.map(item => ({ ...item, clicked: false }));
    return this.Shuffle(reset);
  };

  Shuffle = data => {
    let i = data.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  };

  handleItemClick = id => {
    let Correct = false;
    const newData = this.state.data.map(item => {
      const newItem = { ...item };
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          Correct = true;
        }
      }
      return newItem;
    });
    if(Correct === true){
        this.handleCorrectGuess(newData);
    } else{
        this.handleIncorrectGuess(newData);
    }
  };

  render() {
    return (
      <div>
        <Nav pets={this.state.pets} mostPets={this.state.mostPets} />
        <Container>
          {this.state.data.map(item => (
            <Click
              key={item.id}
              id={item.id}
              handleClick={this.handleItemClick}
              image={item.image}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default Game;