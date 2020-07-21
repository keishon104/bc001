import React from 'react';
import './App.css';

// Data  
const fruit_list = [
  {id: 4, article: "fruit", fruit_name: "apple"},
  {id: 5, article: "fruit", fruit_name: "orange"},
  {id: 7, article: "fruit", fruit_name: "pears"}

]

// Compoenents
const Headder = () => <div className="header"> This is the header </div>
const Footter = () => <div className="footer"> This is the Footer </div>
const Body = () => <div className="header"> {fruit_list.map(fruit => <Fruit key={fruit.id} article={fruit.article} fruit_name={fruit.fruit_name}/> )} </div>



const Fruit = ({article, fruit_name}) => <div>I am a {article} called a {fruit_name} </div>


// Return Function
function App() {
  return (
    <div className="App">
      <Headder/>
      <Body/>
      <Footter/>
    </div>
  );
}

export default App;
