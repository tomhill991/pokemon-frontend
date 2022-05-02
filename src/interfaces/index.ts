interface IAPIPokemon {
    name: string;
    url: string;
}

export interface IAPIPokemons extends Array<IAPIPokemon>{}

export interface IPokemon {
    name: string;
    description: string;
    sprite: string;
}
