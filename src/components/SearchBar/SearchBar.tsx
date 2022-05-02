import { useEffect, useState } from 'react'
import { IAPIPokemons, IAPIPokemon } from '../../interfaces'
import { Suggestions } from '..'

const SearchBar = ({ pokemons, large, searchForNewPokemon } : {
    pokemons: IAPIPokemons,
    large?: boolean,
    searchForNewPokemon: (pokemonName: string) => void
}) => {
    const [search, setSearch] = useState<string>('')
    const [suggestedPokemons, setSuggestedPokemons] = useState<IAPIPokemons>([])

    useEffect(() => {
        if(search === '') {
            setSuggestedPokemons([])
        } else {
            const filterPokemonsToGetSuggestedPokemons:IAPIPokemons = []
            const regex = new RegExp(`^${search.toLowerCase()}`, 'i')

            for(let i = 0; i < pokemons.length; i ++) {
                if(filterPokemonsToGetSuggestedPokemons.length > 4) break
                const pokemon = pokemons[i]
                if(pokemon.name.toLowerCase().match(regex)) {
                    filterPokemonsToGetSuggestedPokemons.push(pokemon)
                }
            }

            setSuggestedPokemons(filterPokemonsToGetSuggestedPokemons)
        }
    }, [search, pokemons])

    const handleSearchSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault()
        searchForNewPokemon(search)
    }

    const handleShowSuggestedPokemon = (suggestedPokemon: IAPIPokemon) => {
        setSearch(suggestedPokemon.name)
        setSuggestedPokemons([])
    }

    return (
        <>
            <div className={"search-wrapper" + (large ? ' large' : '')}>
                <div className="search-container">
                    <input
                        type="search"
                        onChange={(event: React.FormEvent<HTMLInputElement>) => setSearch(event.currentTarget.value)}
                        value={search}
                        placeholder="Searcheth f'r pokemon"
                    />
                    <button onClick={handleSearchSubmit}>+</button>
                </div>
                {
                    suggestedPokemons.length > 0 &&
                    <Suggestions
                        suggestedPokemons={suggestedPokemons}
                        showSuggestedPokemon={handleShowSuggestedPokemon}
                    />
                }
            </div>
        </>
    )
}

export default SearchBar
