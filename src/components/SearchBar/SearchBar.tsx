import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IAPIPokemons } from '../../interfaces'
import { Suggestions } from '..'

const SearchBar = ({ pokemons, large } : {
    pokemons: IAPIPokemons,
    large?: boolean
}) => {
    const [search, setSearch] = useState<string>('')
    const [suggestedPokemons, setSuggestedPokemons] = useState<IAPIPokemons>([])

    const navigate = useNavigate()

    useEffect(() => {
        if(search === '') {
            setSuggestedPokemons([])
        } else {
            const filterPokemonsToGetSuggestedPokemons:IAPIPokemons = []

            for(let i = 0; i < pokemons.length; i ++) {
                if(filterPokemonsToGetSuggestedPokemons.length > 4) break
                const pokemon = pokemons[i]
                if(pokemon.name.toLowerCase().includes(search.toLowerCase())) {
                    filterPokemonsToGetSuggestedPokemons.push(pokemon)
                }
            }

            setSuggestedPokemons(filterPokemonsToGetSuggestedPokemons)
        }
    }, [search, pokemons])

    const handleSearchSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        navigate(`../search?pokemon=${search}`, { replace: true })
    }

    return (
        <>
            <div className="search-container">
                <input
                    type="search"
                    onChange={(event: React.FormEvent<HTMLInputElement>) => setSearch(event.currentTarget.value)}
                />
                <button onClick={handleSearchSubmit}>+</button>
            </div>
            {
                suggestedPokemons.length > 0 &&
                <Suggestions
                    suggestedPokemons={suggestedPokemons}
                />
            }
        </>
    )
}

export default SearchBar
