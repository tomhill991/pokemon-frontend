import { useEffect, useState } from 'react'
import { IAPIPokemons } from '../../interfaces'
import { Suggestions } from '..'

const SearchBar = ({ pokemons, large } : {
    pokemons: IAPIPokemons,
    large?: boolean
}) => {
    const [search, setSearch] = useState<string>('')
    const [suggestedPokemons, setSuggestedPokemons] = useState<IAPIPokemons>([])

    useEffect(() => {
        if(search === '') {
            setSuggestedPokemons([])
        } else {
            const filterPokemonsToGetSuggestedPokemons = pokemons.filter(pokemon => {
                return pokemon.name.toLowerCase().includes(search.toLowerCase()) && pokemon
            })
            setSuggestedPokemons(filterPokemonsToGetSuggestedPokemons)
        }
    }, [search, pokemons])

    return (
        <>
            <input type="search" onChange={(event: React.FormEvent<HTMLInputElement>) => setSearch(event.currentTarget.value)} />
            <Suggestions
                suggestedPokemons={suggestedPokemons}
            />
        </>
    )
}

export default SearchBar
