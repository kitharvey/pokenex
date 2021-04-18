import React from "react"
import { FaSearch } from "react-icons/fa"

interface SearchProps {
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Search: React.FC<SearchProps> = ({ handleSearch }) => {
  return (
    <div className="item-wrapper">
      <label htmlFor="searchpokemon">Search: </label>
      <form
        method="GET"
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => event.preventDefault()}
      >
        <div className="search-wrapper">
          <FaSearch />
          <input
            id="searchpokemon"
            type="search"
            name="q"
            placeholder="Enter Pokemon Name..."
            autoComplete="off"
            onChange={handleSearch}
          />
        </div>
      </form>
    </div>
  )
}

export default Search
