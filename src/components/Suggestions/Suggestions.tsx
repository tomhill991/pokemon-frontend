import { IAPIPokemons } from "../../interfaces"
import { Link } from 'react-router-dom'

const Suggestions = ({ suggestedPokemons } : {
    suggestedPokemons: IAPIPokemons
}) => {
    return (
        <>
            {
                suggestedPokemons.map((suggestedPokemon, index) => (
                    <Link
                        to={`search?pokemon=${suggestedPokemon.name}`}
                        key={index}
                    >
                        {suggestedPokemon.name}
                    </Link>
                ))
            }
        </>
    )
}

export default Suggestions
