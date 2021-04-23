import { PokemonDataInterface } from "@interfaces/Interfaces"
import React from "react"

interface FilterByTypeProps {
  list: PokemonDataInterface[]
  handleFilterByType: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const FilterByType: React.FC<FilterByTypeProps> = ({ list, handleFilterByType }) => {
  const flat = list.map((item) => item.types).flat()
  const arrUnique = Array.from(new Set(flat))
  return (
    <select
      name="filterByTypes"
      id="filterByTypes"
      placeholder="filter by type"
      className="item-wrapper"
      onChange={handleFilterByType}
    >
      <option value="">remove filter</option>
      {arrUnique.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default FilterByType
