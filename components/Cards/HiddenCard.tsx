import { getPokemonImage } from "@helpers/GlobalFunctions"
import { NameIDInterface } from "@interfaces/Interfaces"
import Image from "next/image"
import React from "react"

interface ExploreCardProps {
  pokemon: NameIDInterface
  reveal: boolean
}

const HiddenCard: React.FC<ExploreCardProps> = ({ pokemon, reveal }) => {
  const imgsrc = getPokemonImage(+pokemon.id)
  return (
    <div className="card-container">
      <div className='card'
        style={{
          background: `radial-gradient(rgba(255,255,255,0) 10%, #00b4d8 100%)`,
        }}
      >
      <div style={{ filter: `brightness(${reveal ? 1 : 0})` }}>
        <Image src={imgsrc} alt="hidden pokemon" width={260} height={260} quality={50} priority />
      </div>
      </div>
    </div>
  )
}

export default HiddenCard
