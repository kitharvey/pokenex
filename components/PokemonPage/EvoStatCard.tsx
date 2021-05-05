import React from "react"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import Evolution from "./Evolution"

interface RightCardProps {
  pokemondata: PokemonDataInterface
}

const EvoStatCard: React.FC<RightCardProps> = ({ pokemondata }) => (
  <div className="">
    <div className="details">
      <p className="title">Evolution</p>
      <Evolution />
    </div>
    <div className="details">
      <p className="title">Stats</p>
      <div className="stats-container">
        <div className="stats">
          <p className=" font-semibold">HP</p>
          <p className="text-sm">{pokemondata.stats[0].base_stat}</p>
        </div>
        <div className="stats">
          <p className=" font-semibold">Atk</p>
          <p className="text-sm">{pokemondata.stats[1].base_stat}</p>
        </div>
        <div className="stats">
          <p className=" font-semibold">Def</p>
          <p className="text-sm">{pokemondata.stats[2].base_stat}</p>
        </div>
        <div className="stats">
          <p className=" font-semibold">Sp. Atk</p>
          <p className="text-sm">{pokemondata.stats[3].base_stat}</p>
        </div>
        <div className="stats">
          <p className=" font-semibold">Sp. Def</p>
          <p className="text-sm">{pokemondata.stats[4].base_stat}</p>
        </div>
        <div className="stats">
          <p className=" font-semibold">Speed</p>
          <p className="text-sm">{pokemondata.stats[5].base_stat}</p>
        </div>
      </div>
    </div>
  </div>
)

export default EvoStatCard
