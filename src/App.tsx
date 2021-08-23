//import React from 'react';
//import logo from './logo.svg';
import { useEffect } from "react";
import { request } from "graphql-request"; 
import './App.css';

const uri = 'https://api.thegraph.com/subgraphs/name/aavegotchi/aavegotchi-core-matic';

function App() {

  const fetchSVGInfo = async() => {
    const query = `
    {
      itemTypes(orderBy: svgId, first: 1000) {
        svgId
        name
        traitModifiers
        slotPositions
        rarityScoreModifier
        category
        maxQuantity
        totalQuantity
      }
    }
    `
    const response = await request(uri, query)
    console.log(response)
  }

  useEffect(() => {
    fetchSVGInfo()
  }, [])

  return ( 
    <div className="App">
      
    </div>
  )
 /* return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  ); */
}

export default App;
