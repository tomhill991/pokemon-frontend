import { SearchBar } from '../../components'
import { IAPIPokemons } from '../../interfaces'

function Home({ pokemons } : {
    pokemons: IAPIPokemons
}) {
    return (
        <main className="home">
            <h1>Did Get To Catcheth Those Folk All!</h1>
            <SearchBar
                large
                pokemons={pokemons}
            />
        </main>
    )
}

export default Home
