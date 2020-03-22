import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

 class App extends Component{
  state = {
    persons: [
      {name: 'Mica', age: 19 },
      {name: 'Rodrigo', age: 23}
    ]
  }

render() { 
  return (
    <div className="App">
      <Person name={this.state.persons[0].name} age="19">Lalalala</Person>
      <Person name="Rodrigo" age="23"></Person>
      <Person name="Martina" age="21"></Person>
    </div>
  );
}}

export default App;
