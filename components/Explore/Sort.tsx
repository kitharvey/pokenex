import { SortKey } from "@lib/exploreSlice"
import React from "react"
import { FaSort } from "react-icons/fa"

interface FilterByTypeProps {
  handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void
  sortValue: SortKey | null
}

const Sort: React.FC<FilterByTypeProps> = ({ handleSort, sortValue }) => {
  return (
    <div className="select-wrapper">
      <FaSort />
      <select
        name="sort-pokemons"
        id="sort-pokemons"
        onChange={handleSort}
        value={sortValue || "shuffle"}
      >
        <option value="id">sort by ID</option>
        <option value="name">sort by name</option>
        <option value="shuffle">shuffle</option>
      </select>
    </div>
  )
}

export default Sort
