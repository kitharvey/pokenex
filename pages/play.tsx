import GamePage from "@components/Game/GamePage"
import { InferGetStaticPropsType } from "next"
import { fetchList } from "../fetchers/getPokemon"

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

const Play = ({ pokemonList }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{pokemonList && <GamePage pokemonList={pokemonList} />}</div>
}

export default Play
