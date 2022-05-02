import { SearchBar } from '../../components'
import { IAPIPokemons } from '../../interfaces'

function Home({ pokemons } : {
    pokemons: IAPIPokemons
}) {
    return (
        <>
            <h1>Did Get To Catcheth Those Folk All!</h1>
            <SearchBar
                large
                pokemons={pokemons}
            />
        </>
    )
}

export default Home
