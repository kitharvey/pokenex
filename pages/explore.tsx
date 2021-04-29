import ExplorePage from "@components/Explore/ExplorePage"
import HeadTitle from "@components/HeadTitle/HeadTitle"
import { fetchExploreList } from "@helpers/getPokemon"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import { refineList } from "@lib/exploreSlice"
import { getPokemonList } from "@lib/pokemonSlice"
import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { InferGetStaticPropsType } from "next"
import { useEffect } from "react"

export const getStaticProps = async () => {
  const list = await fetchExploreList()
  return {
    props: {
      pokemons: list,
    },
  }
}

const Explore = ({ pokemons }: InferGetStaticPropsType<PokemonDataInterface[]>) => {
  const { pokemonList } = useAppSelector((state) => state.pokemon)
  const { refinedList } = useAppSelector((state) => state.explore)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (pokemons) {
      dispatch(getPokemonList(pokemons))
      dispatch(refineList(pokemons))
    }
  }, [pokemons, dispatch])

  return (
    <>
      <HeadTitle title="Pokénex | Explore" />
      {pokemonList && refinedList && (
        <ExplorePage pokemonList={pokemonList} refinedList={refinedList} />
      )}
    </>
  )
}

export default Explore
