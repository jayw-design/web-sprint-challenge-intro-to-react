import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Character from "./components/Character"

const BASE_URL = "https://swapi.dev/api/"

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [character, setCharacter] = useState([])

  useEffect(() => {
        axios.get(`${BASE_URL}people`)
          .then((res) => {
            console.log('API works hurrah', res);
            setCharacter(res.data);
          })
          .catch(error => {
            console.log("error in useEffect", error)
          })
  }, []);

  return (
    <div className="App">
      <h1 className="Header">Starwars Characters</h1>
        <Character CharacterList={character}/>
    </div>
  );
}

export default App;
