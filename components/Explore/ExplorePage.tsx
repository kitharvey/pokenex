import Card from "@components/Cards/Card"
import Deck from "@components/Cards/Deck"
import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { UserFavoritesProps } from "interfaces/Interfaces"
import { wrap } from "popmotion"
import { useEffect, useState } from "react"
import { refineList, setSortKey, setSearch, setfilterByType } from "@lib/exploreSlice"
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

    refinableList = listCopy.sort((a, b) => {
      if (a[sortKey] < b[sortKey]) {
        return -1
      }
      if (a[sortKey] > b[sortKey]) {
        return 1
      }
      return 0
    })

    if (search || filterByType) {
      refinableList = listCopy.filter((item) => {
        if (
          search &&
          filterByType &&
          item.name.includes(search) &&
          item.types.includes(filterByType)
        ) {
          return item
        }
        if (search && !filterByType && item.name.includes(search)) {
          return item
        }
        if (!search && filterByType && item.types.includes(filterByType)) {
          return item
        }
        return null
      })
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
    if (text === "name") dispatch(setSortKey("name"))
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
