import React, { Component} from "react";

import Navbar from "./components/navbar";
import Card from "./components/card";

import sushiOne from './img/sushi1.jpg'
import sushiTwo from './img/sushi2.jpg'
import sushiFive from './img/sushi5.jpg'
import sushiSix from './img/sushi6.jpg'
import sushiEight from './img/sushi8.jpg'
import sushiNine from './img/sushi9.jpg'



class App extends Component {
  state = {
    cards:  [
      {id: 0, name:"Sushi Roll", price: 1.99, image: sushiOne, quantity: 0},
      {id: 2, name:"Sushi Dragon", price: 2.99, image: sushiTwo, quantity: 0},
      {id: 5, name:"Sushi Great", price: 2.99, image: sushiFive, quantity: 0},
      {id: 6, name:"California Roll", price: 3.99, image: sushiSix, quantity: 0},
      {id: 8, name:"Philadelphia Roll", price: 2.99, image: sushiEight, quantity: 0},
      {id: 9, name:"Sushi Roll", price: 1.99, image: sushiNine, quantity: 0},
    ]
  };

  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards})
  };

  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantity++;
    this.setState({ cards });
    console.log(this.setState({ cards }));
  };

  render(){
    return (
  
      <>
        <Navbar/>
  
        <div className="container">
          <h1 className="mt-5 pb-5"> Cosa desideri ordinare? </h1>
  
          <div className="row"> 
          {this.state.cards.map(card => (
            <Card 
              key = {card.id}
              onDelete={this.handleDelete}
              onIncrement={this.handleIncrement}
              card = {card}
            />
          ))}
          </div>
        </div>
      </>
    );  
  }

}

export default App;
