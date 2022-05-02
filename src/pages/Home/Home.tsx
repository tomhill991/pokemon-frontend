import { SearchBar } from '../../components'
import { IAPIPokemons } from '../../interfaces'
import { useNavigate } from 'react-router-dom'

function Home({ pokemons } : {
    pokemons: IAPIPokemons
}) {
    const navigate = useNavigate()

    return (
        <main className="home">
            <h1>Did Get To Catcheth Those Folk All!</h1>
            <SearchBar
                large
                pokemons={pokemons}
                searchForNewPokemon={(pokemonName) => navigate(`/search?pokemon=${pokemonName}`, { replace: true })}
            />
        </main>
    )
}

export default Home
