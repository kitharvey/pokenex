import React from "react"
import { PokemonDataInterface } from "@interfaces/Interfaces"

export interface CardProps {
  pokemon: PokemonDataInterface
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <div>
      <div>
        <h1>{pokemon.species.name}</h1>
        <h1>{pokemon.id}</h1>
        {pokemon.types.map(type => <p key={type} >{type}</p> )}
      </div>
    </div>
  )
}

export default Card
