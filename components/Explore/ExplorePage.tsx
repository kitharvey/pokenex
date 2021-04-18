import useRefineItems from "@lib/useRefineItems"
import { NameIDInterface } from "interfaces/Interfaces"
import DeckofCards from "./DeckofCards"

interface ExploreProps {
  pokemonList: NameIDInterface[]
}

const ExplorePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  const { pokemons, requestSort, requestShuffle, requestFilter } = useRefineItems(pokemonList)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    requestFilter(text)
  }

  return (
    <div>
      <button type="button" onClick={() => requestSort("name")}>
        sort name
      </button>
      <button type="button" onClick={() => requestSort("id")}>
        sort id
      </button>
      <button type="button" onClick={() => requestShuffle()}>
        shuffle
      </button>
      <input type="text" placeholder="Enter pokemon name..." onChange={handleSearch} />
      {pokemons && <DeckofCards pokemons={pokemons} />}
    </div>
  )
}

export default ExplorePage
