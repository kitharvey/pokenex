import Card from "@components/Cards/Card"
import FilterByType from "@components/InputComponents/FilterByType"
import Search from "@components/InputComponents/Search"
import Sort from "@components/InputComponents/Sort"
import { UserFavoritesProps } from "@interfaces/Interfaces"
import useRefineItems from "@lib/useRefineItems"
import React from "react"

interface FavoritesProps {
  favorites: UserFavoritesProps[]
}

const Favorites: React.FC<FavoritesProps> = ({ favorites }) => {
  const {
    refinedItems,
    requestSort,
    requestSearch,
    requestFilter,
    sortKey,
    search,
    filterByType,
  } = useRefineItems(favorites)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    requestSearch(text)
  }

  const handleFilterByType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const text = event.target.value
    requestFilter(text)
  }

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const text = event.target.value
    if (text === "id") requestSort("id")
    else if (text === "name") requestSort("name")
    else requestSort(null)
  }

  return (
    <div className="favorites">
      <p className="title">Favorites</p>
      <div className="item-wrapper">
        <Search handleSearch={handleSearch} searchValue={search} />
        <Sort handleSort={handleSort} sortValue={sortKey} />
        <FilterByType
          list={favorites}
          handleFilterByType={handleFilterByType}
          filterValue={filterByType}
        />
      </div>
      <div className="favorites-wrapper">
        {refinedItems.map((favorite) => (
          <div className="card-wrapper" key={favorite.id}>
            <Card pokemon={favorite} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Favorites
