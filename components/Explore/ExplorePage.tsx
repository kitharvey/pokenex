import Card from "@components/Cards/Card"
import Deck from "@components/Cards/Deck"
import useRefineItems from "@lib/useRefineItems"
import { PokemonDataInterface } from "interfaces/Interfaces"
import { wrap } from "popmotion"
import { useState } from "react"
import FilterByType from "./FilterByType"
import Search from "./Search"
import ShuffleButton from "./ShuffleButton"
import SortButton from "./SortButton"
import UndoButton from "./UndoButton"

interface ExploreProps {
  pokemonList: PokemonDataInterface[]
}

const ExplorePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  const { pokemons, requestFilter, requestSort, requestShuffle, requestSearch } = useRefineItems(
    pokemonList
  )
  const [index, setIndex] = useState<number>(0)
  const [exitX, setExitX] = useState<number>(0)
  const cardIndex = wrap(0, pokemons.length + 1, index)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    requestSearch(text)
    setIndex(0)
  }

  const handleUndo = () => {
    if (index > 0) setIndex(index - 1)
  }

  const handleFilterByType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const text = event.target.value
    requestFilter(text)
    setIndex(0)
  }

  const handleShuffle = () => {
    requestShuffle()
    setIndex(0)
  }

  return (
    <div className="exploreplay-page">
      <Search handleSearch={handleSearch} />
      <FilterByType list={pokemonList} handleFilterByType={handleFilterByType} />
      {pokemons && (
        <Deck
          pokemons={pokemons}
          cardIndex={cardIndex}
          index={index}
          setIndex={setIndex}
          exitX={exitX}
          setExitX={setExitX}
          dragX="x"
          CardComponent={Card}
        />
      )}
      <UndoButton handleUndo={handleUndo} />
      <SortButton title="name" sortKey="name" handleSort={requestSort} />
      <SortButton title="id" sortKey="id" handleSort={requestSort} />
      <ShuffleButton handleShuffle={handleShuffle} />
    </div>
  )
}

export default ExplorePage
