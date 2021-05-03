import HeadTitle from "@components/HeadTitle/HeadTitle"
import PokemonPage from "@components/PokemonPage/PokemonPage"
import { useAppSelector } from "@lib/reduxHooks"
import Case from "case"

const Pokemon = () => {
  const { pokemonData } = useAppSelector((state) => state.pokemon)

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
