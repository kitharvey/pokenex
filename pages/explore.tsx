import ExplorePage from "@components/Explore/ExplorePage"
import HeadTitle from "@components/HeadTitle/HeadTitle"
import { fetchExploreList } from "@helpers/getPokemon"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import { refineList } from "@lib/exploreSlice"
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
  const { refinedList } = useAppSelector((state) => state.explore)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (pokemons) {
      dispatch(refineList(pokemons))
    }
  }, [pokemons, dispatch])

  return (
    <>
      <HeadTitle title="Pokénex | Explore" />
      {pokemons && refinedList && (
        <ExplorePage pokemonList={pokemons} refinedList={refinedList} />
      )}
    </>
  )
}

export default Explore
