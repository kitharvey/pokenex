import DeckofCards from "@components/Explore/DeckofCards"
import { InferGetStaticPropsType } from "next"
import { fetchList } from "../fetchFromAPI/getPokemon"

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
  return <div>{pokemonList && <DeckofCards pokemonList={pokemonList} />}</div>
}

export default Explore
