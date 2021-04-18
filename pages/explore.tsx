import { InferGetStaticPropsType } from "next"
import ExplorePage from "@components/Explore/ExplorePage"
import { fetchList } from "@modules/getPokemon"

export const getStaticProps = async () => {
  const pokemonList = await fetchList()
  if (!pokemonList) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      pokemonList,
    },
  }
}

const Explore = ({ pokemonList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{pokemonList && <ExplorePage pokemonList={pokemonList} />}</div>
}

export default Explore
