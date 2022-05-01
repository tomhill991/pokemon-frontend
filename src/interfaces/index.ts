interface IAPIPokemon {
    name: string;
    url: string;
}

export interface IAPIPokemons extends Array<IAPIPokemon>{}
