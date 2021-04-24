import React from "react"
import { FaSearch } from "react-icons/fa"

interface SearchProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
  searchValue: string
}

const Search: React.FC<SearchProps> = ({ handleSearch, searchValue }) => {
  return (
    <div className="">
      <div className="search-wrapper">
        <FaSearch />
        <input
          id="searchpokemon"
          type="search"
          name="q"
          placeholder="Enter Pokemon Name..."
          autoComplete="off"
          onChange={handleSearch}
          value={searchValue}
        />
      </div>
    </div>
  )
}

export default Search
