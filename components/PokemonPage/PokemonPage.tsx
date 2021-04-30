import Card from "@components/Cards/Card"
import { useAppSelector } from "@lib/reduxHooks"
import { useRouter } from "next/router"
import LeftCard from "./LeftCard"
import RightCard from "./RightCard"

const PokemonPage = () => {
const {pokemonSpeciesData, pokemonData} = useAppSelector(state => state.pokemon)
const router = useRouter()
  return (
    <div className="">
      <button type='button' className='' onClick={() => router.back()} >Go Back</button>
      <div className='cards-container' >
        <div className='card-wrapper' >
          {pokemonData && <Card pokemon={pokemonData} />}
        </div>
        <div className='left-card' >
          {(pokemonSpeciesData && pokemonData) && <LeftCard pokemondata={pokemonData} speciesdata={pokemonSpeciesData} />}
        </div>
        <div>
          {pokemonData && <RightCard pokemondata={pokemonData} />}
        </div>
      </div>
      
    </div>
  )
}

export default PokemonPage
