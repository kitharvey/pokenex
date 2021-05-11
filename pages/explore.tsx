import ExplorePage from "@components/Explore/ExplorePage"
import HeadTitle from "@components/HeadTitle/HeadTitle"
import { fetchExploreList } from "@helpers/getPokemon"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import { InferGetStaticPropsType } from "next"

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
