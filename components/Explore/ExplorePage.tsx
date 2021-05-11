import Card from "@components/Cards/Card"
import Deck from "@components/Cards/Deck"
import useRefineItems from "@lib/useRefineItems"
// import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { UserFavoritesProps } from "interfaces/Interfaces"
import { wrap } from "popmotion"
import { useState } from "react"
// import { refineList, setSortKey, setSearch, setfilterByType } from "@lib/exploreSlice"
import FilterByType from "../InputComponents/FilterByType"
import Search from "../InputComponents/Search"
import Sort from "../InputComponents/Sort"
import UndoButton from "./UndoButton"

interface ExploreProps {
  pokemonList: UserFavoritesProps[]
}

const ExplorePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  const {
    refinedItems,
    requestSort,
    requestSearch,
    requestFilter,
    sortKey,
    search,
    filterByType,
  } = useRefineItems(pokemonList)
  const [index, setIndex] = useState<number>(0)
  const [exitX, setExitX] = useState<number>(0)
  const cardIndex = wrap(0, refinedItems.length + 1, index)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    requestSearch(text)
    setIndex(0)
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
    else requestSort(null)
  }

  const handleUndo = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <div className="page">
      <div className="item-wrapper">
        <Search handleSearch={handleSearch} searchValue={search} />
        <Sort handleSort={handleSort} sortValue={sortKey} />
        <FilterByType
          list={pokemonList}
          handleFilterByType={handleFilterByType}
          filterValue={filterByType}
        />
      </div>
      {refinedItems && (
        <Deck
          pokemons={refinedItems}
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
