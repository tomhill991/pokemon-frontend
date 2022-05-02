import { IAPIPokemons } from "../../interfaces"
import { Link } from 'react-router-dom'

const Suggestions = ({ suggestedPokemons } : {
    suggestedPokemons: IAPIPokemons
}) => {
    return (
        <>
        <ul className="suggestions-container">
            {
                suggestedPokemons.map((suggestedPokemon, index) => (
                    <li>
                        <Link
                            to={`search?pokemon=${suggestedPokemon.name}`}
                            key={index}
                        >
                            {suggestedPokemon.name}
                        </Link>
                    </li>
                ))
            }
        </ul>
        </>
    )
}

export default Suggestions
