import React from "react"

interface FilterByTypeProps {
  handleSort: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

const Sort: React.FC<FilterByTypeProps> = ({ handleSort }) => {
  return (
    <select name="sort-pokemons" id="sort-pokemons" onChange={handleSort}>
      <option value="id">sort by ID</option>
      <option value="name">sort by name</option>
      <option value="shuffle">shuffle</option>
    </select>
  )
}

export default Sort
