import { useEffect, useState } from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import axios from 'axios'
import { Header } from './components'
import { Home, Search } from './pages'


function App() {
  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    async function fetchPokemons() {
      try {
        const { data } = await axios.get(process.env.REACT_APP_POKE_API + '/pokemon?limit=100000000')
        setPokemons(data.results)
      } catch(error) {
        console.error(error)
      }
    }

    fetchPokemons()
  }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home pokemons={pokemons}/> }/>
        <Route path="search" element={<Search pokemons={pokemons}/> } />
        <Route
          path="*"
          element={<Navigate to="/" replace />}
        />
      </Routes>
    </>
  );
}

export default App;
