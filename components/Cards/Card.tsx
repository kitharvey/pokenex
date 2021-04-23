import React from "react"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import Image from "next/image"
import { findColor, getTypeIcon } from "@helpers/getTypeIconsAndColor"
import { getStringIDfromID } from "@helpers/GlobalFunctions"

export interface CardProps {
  pokemon: PokemonDataInterface
}

const Card: React.FC<CardProps> = ({ pokemon }) => {
  return (
    <div className="card-container">
      <div className='card'
      style={{
         background: `linear-gradient(0deg, rgba(255,255,255,0) 0%, ${
          findColor(pokemon.types[0])[1]
        } 100%)`,
      }} >
      <p className='id-number' >#{getStringIDfromID(pokemon.id)}</p>
      <Image
        src={pokemon.sprite}
        alt={pokemon.species.name}
        width={260}
        height={260}
        quality={50}
        priority
      />
    <div className='types-container' >
      {pokemon.types.map((type) => (
        <img
          src={getTypeIcon(type)[1]}
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            margin: pokemon.types.length > 1 ? '-2.5px' : '0',
          }}
          key={type}
          alt={getTypeIcon(type)[0]}
        />
      ))}
    </div>
      <p className='name' >{pokemon.species.name}</p>
      </div>
    
    </div>
  )
}

export default Card
