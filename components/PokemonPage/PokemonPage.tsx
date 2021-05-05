import Card from "@components/Cards/Card"
import { getEvolutionData, getPokemonData, getPokemonSpeciesData } from "@lib/pokemonSlice"
import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { useRouter } from "next/router"
import { useEffect } from "react"
import BioTrainCard from "./BioTrainCard"
import EvoStatCard from "./EvoStatCard"

const PokemonPage = () => {
  const { pokemonSpeciesData, pokemonData } = useAppSelector((state) => state.pokemon)
  const router = useRouter()
  const { pid } = router.query
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (pid) {
      dispatch(getPokemonSpeciesData(+pid))
      dispatch(getPokemonData(+pid))
    }
  }, [pid, dispatch])

  useEffect(() => {
    if (pokemonSpeciesData) {
      dispatch(getEvolutionData(pokemonSpeciesData.evolution_chain.url))
    }
  }, [pokemonSpeciesData, dispatch])

  return (
    <div>
      <button type="button" className="black-button" onClick={() => router.back()}>
        Go Back
      </button>
      <div className="cards-container">
        <div className="card-wrapper">{pokemonData && <Card pokemon={pokemonData} />}</div>
        <div className="">
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
