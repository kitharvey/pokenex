import { UserFavoritesProps } from "@interfaces/Interfaces"
import React from "react"
import { FiFilter } from "react-icons/fi"

interface FilterByTypeProps {
  list: UserFavoritesProps[]
  handleFilterByType: (event: React.ChangeEvent<HTMLSelectElement>) => void
  filterValue: string
}

const FilterByType: React.FC<FilterByTypeProps> = ({ list, handleFilterByType, filterValue }) => {
  const flat = list.map((item) => item.types).flat()
  const arrUnique = Array.from(new Set(flat))
  return (
    <div className="select-wrapper">
      <FiFilter />
      <select
        name="filterByTypes"
        id="filterByTypes"
        onChange={handleFilterByType}
        value={filterValue}
      >
        <option value="">filter by type</option>
        {arrUnique.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default FilterByType
