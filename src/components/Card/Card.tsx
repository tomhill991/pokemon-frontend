import { IPokemon } from "../../interfaces"

const Card = ({ pokemon } : {
    pokemon: IPokemon
}) => {
    return (
        <>
        <div className="card-container">
            <img
                src={pokemon.sprite}
                alt={'image of ' + pokemon.name}
            />
            <span>{ pokemon.name }</span>
            <span>{ pokemon.description }</span>
        </div>
        </>
    )
}

export default Card
