import { IAPIPokemons, IAPIPokemon } from "../../interfaces"

const Suggestions = ({ suggestedPokemons, showSuggestedPokemon } : {
    suggestedPokemons: IAPIPokemons,
    showSuggestedPokemon: (suggestedPokemon: IAPIPokemon) => void
}) => {
    return (
        <>
        <ul className="suggestions-container">
            {
                suggestedPokemons.map((suggestedPokemon, index) => (
                    <li
                        key={index}
                        onClick={() => showSuggestedPokemon(suggestedPokemon)}
                    >
                        { suggestedPokemon.name }
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default Suggestions
