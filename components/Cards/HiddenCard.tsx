import { NameIDInterface } from "@interfaces/Interfaces"
import React from "react"

interface ExploreCardProps {
  pokemon: NameIDInterface
}

const HiddenCard: React.FC<ExploreCardProps> = ({ pokemon }) => {
  return (
    <div>
      <p>{pokemon.name}</p>
    </div>
  )
}

export default HiddenCard
