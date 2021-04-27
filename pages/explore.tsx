import { InferGetStaticPropsType } from "next"
import ExplorePage from "@components/Explore/ExplorePage"
import { fetchExploreList } from "@helpers/getPokemon"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import HeadTitle from "@components/HeadTitle/HeadTitle"

export const getStaticProps = async () => {
  const list = await fetchExploreList()
  return {
    props: {
      pokemons: list,
    },
  }
}

const Explore = ({ pokemons }: InferGetStaticPropsType<PokemonDataInterface[]>) => {
  return (
    <>
      <HeadTitle title="Pokénex | Explore" />
      {pokemons && <ExplorePage pokemonList={pokemons} />}
    </>
  )
}

export default Explore
