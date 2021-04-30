import HeadTitle from "@components/HeadTitle/HeadTitle"
import PokemonPage from "@components/PokemonPage/PokemonPage"
import { getEvolutionData, getPokemonData, getPokemonSpeciesData } from "@lib/pokemonSlice"
import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Case from "case"

const Pokemon = () => {
  const {pokemonData} = useAppSelector(state => state.pokemon)
  const router = useRouter()
  const {id} = router.query
  const dispatch = useAppDispatch()

    useEffect(() => {
        if(id){
            console.log(id)
            dispatch(getEvolutionData(+id))
            dispatch(getPokemonSpeciesData(+id))
            dispatch(getPokemonData(+id))
        }
    }, [id])

        return <>
        <HeadTitle title={`${pokemonData ? "Pokénex | " + Case.capital(pokemonData.name) : "Fetching pokemon data"}`} />
          <PokemonPage />
        </>
}


export default Pokemon