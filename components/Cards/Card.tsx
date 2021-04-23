import React from "react"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import Image from "next/image"

export interface CardProps {
  pokemon: PokemonDataInterface
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <div className="card">
      <p>{pokemon.species.name}</p>
      <p>{pokemon.id}</p>
      {pokemon.types.map((type) => (
        <p key={type}>{type}</p>
      ))}
      <Image
        src={pokemon.sprite}
        alt={pokemon.species.name}
        width={280}
        height={280}
        quality={50}
        priority
      />
    </div>
  )
}

export default Card