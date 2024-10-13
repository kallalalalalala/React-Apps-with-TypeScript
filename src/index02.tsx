import React, { Component } from 'react';

// Définir une interface pour l'état
interface CounterState {
  count: number; // Le state 'count' doit être un nombre
}

// Définir une interface pour les props (s'il y en a, sinon laisser vide)
interface CounterProps {}

// Annoter le composant avec les types des props et de l'état
class Counter extends Component<CounterProps, CounterState> {
  state: CounterState = {
    count: 0, // Initialiser le count à 0
  };

  increment = () => {
    // Méthode pour incrémenter le count
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

export default Counter;
