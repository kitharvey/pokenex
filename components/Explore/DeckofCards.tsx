import { NameIDInterface } from "interfaces/Interfaces"
import React from "react"

interface DeckofCardsProps {
  pokemons: NameIDInterface[]
}

const DeckofCards: React.FC<DeckofCardsProps> = ({ pokemons }) => {
  return (
    <div className="card-wrapper">
      {pokemons.map((pokemon) => (
        <p key={pokemon.id}>{pokemon.name}</p>
      ))}
    </div>
  )
}

export default DeckofCards
