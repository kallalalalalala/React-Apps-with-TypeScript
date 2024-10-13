import React from 'react';

// Définir une interface pour les props
interface GreetingProps {
  name: string; // Le prop 'name' doit être une chaîne de caractères
}

// Annoter le composant avec le type des props
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default Greeting;
