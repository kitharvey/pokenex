import Card from "@components/Cards/Card"
import { useAppSelector } from "@lib/reduxHooks"
import { useRouter } from "next/router"
import BioTrainCard from "./BioTrainCard"
import EvoStatCard from "./EvoStatCard"

const PokemonPage = () => {
  const { pokemonSpeciesData, pokemonData } = useAppSelector((state) => state.pokemon)
  const router = useRouter()
  return (
    <div className="">
      <button type="button" className="black-button" onClick={() => router.back()}>
        Go Back
      </button>
      <div className="cards-container">
        <div className="card-wrapper">{pokemonData && <Card pokemon={pokemonData} />}</div>
        <div>
          {pokemonSpeciesData && pokemonData && (
            <BioTrainCard pokemondata={pokemonData} speciesdata={pokemonSpeciesData} />
          )}
          {pokemonData && <EvoStatCard pokemondata={pokemonData} />}
        </div>
      </div>
    </div>
  )
}

export default PokemonPage
