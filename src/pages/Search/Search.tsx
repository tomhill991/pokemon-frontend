import { useEffect, useState } from 'react'
import { PokemonCard, NotFound, SearchBar, SpinningLoader } from '../../components'
import { IAPIPokemons, IPokemon } from "../../interfaces"
import axios from 'axios'
import { useSearchParams } from "react-router-dom";

function Search({ pokemons } : {
    pokemons: IAPIPokemons
}) {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [errorMessage, setErrorMessage] = useState<string>('')
    const [searchParams, setSearchParams] = useSearchParams()

    useEffect(() => {
        async function fetchPokemon() {
            try {
                if(!searchParams.get('pokemon')) {
                    setLoading(false)
                    return
                }
                const pokemonName = searchParams.get('pokemon')
                const { data } = await axios.get(process.env.REACT_APP_API_URL + '/pokemons/' + pokemonName)
                setLoading(false)
                setPokemon(data)
            } catch(err: any) {
                const { response } = err
                setErrorMessage('Not hath found: ' + response.data.message)
                setLoading(false)
            }
        }

        fetchPokemon()
    }, [searchParams])



    if(loading) {
        return <SpinningLoader />
    }

    return (
        <main className="search">
            <SearchBar
                pokemons={pokemons}
                searchForNewPokemon={(pokemonName) => {
                    setLoading(true)
                    setPokemon(null)
                    setSearchParams({
                        pokemon: pokemonName
                    })
                }}
            />
            {
                pokemon ?
                    <PokemonCard pokemon={pokemon} />
                :
                    errorMessage &&
                    <NotFound errorMessage={errorMessage}/>
            }
        </main>
    )
}

export default Search
