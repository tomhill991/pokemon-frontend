import SearchBar from '../../components/SearchBar/SearchBar'

function Home({ pokemons } : {
    pokemons: Array<{
        name: string,
        url: string
    }>
}) {
    return (
        <>
            <h1>Did Get To Catcheth Those Folk All!</h1>
            <SearchBar

            />
        </>
    )
}

export default Home
