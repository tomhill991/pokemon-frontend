import { IPokemon } from "../../interfaces"

const PokemonCard = ({ pokemon } : {
    pokemon: IPokemon
}) => {
    return (
        <>
        <div className="card-container">
            <img
                src={pokemon.sprite}
                alt={'image of ' + pokemon.name}
            />
            <div className="text">
                <h2>{ pokemon.name[0].toUpperCase() + pokemon.name.slice(1, pokemon.name.length) }</h2>
                <p>{ pokemon.description }</p>
            </div>
        </div>
        </>
    )
}

export default PokemonCard
