import { NameIDInterface } from "interfaces/Interfaces"
import React, { useState } from "react"

interface DeckofCardsProps {
  pokemons: NameIDInterface[]
}

const DeckofCards: React.FC<DeckofCardsProps> = ({ pokemons }) => {
  const [index, setindex] = useState<number>(0)
  return (
    <div className="card-wrapper">
      <button type="button" onClick={() => setindex(index + 1)}>
        {" "}
        plus plus{" "}
      </button>
      <p>index: {index}</p>
      {pokemons.map((pokemon) => (
        <p key={pokemon.id}>{pokemon.name}</p>
      ))}
    </div>
  )
}

export default DeckofCards
