import HeadTitle from "@components/HeadTitle/HeadTitle"
import PokemonPage from "@components/PokemonPage/PokemonPage"
import { getEvolutionData, getPokemonData, getPokemonSpeciesData } from "@lib/pokemonSlice"
import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { useRouter } from "next/router"
import { useEffect } from "react"
import Case from "case"

const Pokemon = () => {
  const { pokemonData, pokemonSpeciesData } = useAppSelector((state) => state.pokemon)
  const router = useRouter()
  const { id } = router.query
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (id) {
      dispatch(getPokemonSpeciesData(+id))
      dispatch(getPokemonData(+id))
    }
  }, [id, dispatch])

  useEffect(() => {
    if (pokemonSpeciesData) {
      dispatch(getEvolutionData(pokemonSpeciesData.evolution_chain.url))
    }
  }, [pokemonSpeciesData, dispatch])

  return (
    <>
      <HeadTitle
        title={`${
          pokemonData ? `Pokénex | ${Case.capital(pokemonData.name)}` : "Fetching pokemon data"
        }`}
      />
      <PokemonPage />
    </>
  )
}

export default Pokemon
