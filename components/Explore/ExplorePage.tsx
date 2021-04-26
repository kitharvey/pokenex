import Card from "@components/Cards/Card"
import Deck from "@components/Cards/Deck"
import useRefineItems from "@lib/useRefineItems"
import { PokemonDataInterface } from "interfaces/Interfaces"
import { wrap } from "popmotion"
import { useState } from "react"
import FilterByType from "./FilterByType"
import Search from "./Search"
import Sort from "./Sort"
import UndoButton from "./UndoButton"

interface ExploreProps {
  pokemonList: PokemonDataInterface[]
}

const ExplorePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  const {
    pokemons,
    requestFilter,
    requestSort,
    requestShuffle,
    requestSearch,
    search,
    filterByType,
  } = useRefineItems(pokemonList)
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

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const text = event.target.value
    setIndex(0)
    if (text === "id") requestSort("id")
    else if (text === "name") requestSort("name")
    else if (text === "shuffle") requestShuffle()
  }

  return (
    <div className="page">
      <div className="item-wrapper">
        <Search handleSearch={handleSearch} searchValue={search} />
        <Sort handleSort={handleSort} />
        <FilterByType
          list={pokemonList}
          handleFilterByType={handleFilterByType}
          filterValue={filterByType}
        />
      </div>
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
    </div>
  )
}

export default ExplorePage
