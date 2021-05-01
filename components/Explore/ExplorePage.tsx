import Card from "@components/Cards/Card"
import Deck from "@components/Cards/Deck"
import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { UserFavoritesProps } from "interfaces/Interfaces"
import { wrap } from "popmotion"
import { useEffect, useState } from "react"
import { refineList, setSortKey, setSearch, setfilterByType } from "@lib/exploreSlice"
import { shuffle } from "@helpers/GlobalFunctions"
import FilterByType from "./FilterByType"
import Search from "./Search"
import Sort from "./Sort"
import UndoButton from "./UndoButton"

interface ExploreProps {
  pokemonList: UserFavoritesProps[]
  refinedList: UserFavoritesProps[]
}

const ExplorePage: React.FC<ExploreProps> = ({ pokemonList, refinedList }) => {
  const { search, filterByType, sortKey } = useAppSelector((state) => state.explore)
  const dispatch = useAppDispatch()
  const [index, setIndex] = useState<number>(0)
  const [exitX, setExitX] = useState<number>(0)
  const cardIndex = wrap(0, refinedList.length + 1, index)

  useEffect(() => {
    const listCopy = [...pokemonList]
    let refinableList = [...pokemonList]
    if (sortKey) {
      refinableList = listCopy.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return -1
        }
        if (a[sortKey] > b[sortKey]) {
          return 1
        }
        return 0
      })
    }

    if (sortKey === null) {
      refinableList = shuffle(listCopy)
    }

    if (search) {
      refinableList = listCopy.filter((item) => item.name.includes(search))
    }

    if (filterByType) {
      refinableList = listCopy.filter((item) => item.types.includes(filterByType))
    }

    dispatch(refineList(refinableList))
  }, [search, filterByType, sortKey, dispatch, pokemonList])

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    dispatch(setSearch(text))
    setIndex(0)
  }

  const handleUndo = () => {
    if (index > 0) setIndex(index - 1)
  }

  const handleFilterByType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const text = event.target.value
    dispatch(setfilterByType(text))
    setIndex(0)
  }

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const text = event.target.value
    setIndex(0)
    if (text === "id") dispatch(setSortKey("id"))
    else if (text === "name") dispatch(setSortKey("name"))
    else dispatch(setSortKey(null))
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
      {refinedList && (
        <Deck
          pokemons={refinedList}
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
