import React, { useState, useEffect } from 'react';
import './App.css';
import { Card } from './Card';

function App() {
  console.log('App---------')
  const [pokemonData, setPokemonData] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  const fetchData = async(url) => {
    try {
      setIsLoading(true)
      const resp = await fetch(url)
      const response = await resp.json()
      setIsLoading(false)
      setPokemonData(response)
    } catch(e) {
      setIsLoading(false)
      setError(true)
    }  
  } 

  useEffect(() => {
    const url = 'https://pokeapi.co/api/v2/pokemon?limit=3&offset=0';
    fetchData(url);
    return () => {};
  },[])

  // if (isLoading) return <div>...loading</div>
  // if (error) return <div>...error</div>
  return (
    < >
    <div className="app">
        {
           pokemonData && pokemonData.results.map((pok, id) =>  <Card name={pok.name} url={pok.url} key={id}/>)
        }  
    </div>
    <div className="app__button">
      <button className="app__button-prev" disabled={pokemonData && pokemonData.previous === null} onClick={() => fetchData(pokemonData.previous)} >Prev</button>
      <button className="app__button-next" onClick={() => fetchData(pokemonData.next)}>Next</button>
    </div>
    </>
  )
}

export default App;


