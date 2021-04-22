import { InferGetStaticPropsType } from "next"
import ExplorePage from "@components/Explore/ExplorePage"
import { fetchList } from "@helpers/getPokemon"
import { PokemonDataInterface } from "@interfaces/Interfaces"

export const getStaticProps = async () => {
  const list = await fetchList()
  console.log(list)

  return {
    props: {
      pokemons: list,
    },
  }
}

const Explore = ({ pokemons }: InferGetStaticPropsType<PokemonDataInterface[]>) => {
  return <div>{pokemons && <ExplorePage pokemonList={pokemons} />}</div>
}

export default Explore
