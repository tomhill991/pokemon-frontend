import { useEffect, useState } from 'react'
import { SearchBar, Card, SpinningLoader } from '../../components'
import { IAPIPokemons, IPokemon } from "../../interfaces"
import axios from 'axios'
import { useSearchParams } from "react-router-dom";

function Search({ pokemons } : {
    pokemons: IAPIPokemons
}) {
    const [pokemon, setPokemon] = useState<IPokemon | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [searchParams] = useSearchParams()

    useEffect(() => {
        async function fetchPokemon() {
            try {
                const pokemonName = searchParams.get('pokemon')
                const { data } = await axios.get(process.env.REACT_APP_API_URL + '/pokemons/' + pokemonName)
                setLoading(false)
                setPokemon(data)
            } catch(err) {
                setLoading(false)
                console.error(err, 'err')
            }
        }
        fetchPokemon()
    }, [searchParams])

    if(loading) {
        return <SpinningLoader />
    }

    return (
        <>
            <SearchBar
                pokemons={pokemons}
            />
            {
                pokemon ?
                    <Card pokemon={pokemon} />
                :
                    <h1>NOTHING HERE</h1>
            }
        </>
    )
}

export default Search
