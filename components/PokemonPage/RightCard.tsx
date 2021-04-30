import React from 'react'
import { PokemonDataInterface } from '@interfaces/Interfaces'
import Evolution from './Evolution'

interface RightCardProps {
    pokemondata: PokemonDataInterface
}

const RightCard: React.FC<RightCardProps> = ({ pokemondata }) => (
  <div className="h-max w-full p-4 bg-white">
      <div className="min-h-0 h-max w-full flex flex-col items-center justify-between lg:min-h-100">
        <div className="w-full">
          <p className="mr-auto text-xl font-bold">Evolution</p>
          <Evolution />
        </div>
        <div className="w-full mt-8">
          <p className="mr-auto text-xl font-bold">Stats</p>
          <div className="grid grid-cols-3 gap-y-5 w-full mt-4">
            <div className="flex flex-col items-center">
              <p className=" font-semibold">HP</p>
              <p className="text-sm">{pokemondata.stats[0].base_stat}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className=" font-semibold">Atk</p>
              <p className="text-sm">{pokemondata.stats[1].base_stat}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className=" font-semibold">Def</p>
              <p className="text-sm">{pokemondata.stats[2].base_stat}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className=" font-semibold">Sp. Atk</p>
              <p className="text-sm">{pokemondata.stats[3].base_stat}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className=" font-semibold">Sp. Def</p>
              <p className="text-sm">{pokemondata.stats[4].base_stat}</p>
            </div>
            <div className="flex flex-col items-center">
              <p className=" font-semibold">Speed</p>
              <p className="text-sm">{pokemondata.stats[5].base_stat}</p>
            </div>
          </div>
        </div>
      </div>
  </div>
)

export default RightCard