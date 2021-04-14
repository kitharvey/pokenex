import useSort from "hooks/useSort"
import { NameIDInterface } from "interfaces/Interfaces"

interface ExploreProps {
  pokemonList: NameIDInterface[]
}

const ExplorePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  const { pokemons, requestSort, setSortConfig } = useSort(pokemonList)

  return (
    <div>
      <button type="button" onClick={() => requestSort("name")}>
        sort name
      </button>
      <button type="button" onClick={() => requestSort("id")}>
        sort id
      </button>
      <button type="button" onClick={() => setSortConfig(null)}>
        unsort
      </button>
      {pokemons && pokemons.map((pokemon) => <p key={pokemon.id}>{pokemon.name}</p>)}
    </div>
  )
}

export default ExplorePage
