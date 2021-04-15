import { NameIDInterface } from "interfaces/Interfaces"
// import { useState } from "react"

interface ExploreProps {
  pokemonList: NameIDInterface[]
}

const GamePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  // const [pokemons, setPokemons] = useState<NameIDInterface[]>(pokemonList)
  return (
    <div>{pokemonList && pokemonList.map((pokemon) => <p key={pokemon.id}>{pokemon.name}</p>)}</div>
  )
}

export default GamePage
