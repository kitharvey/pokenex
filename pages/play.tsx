import GamePage from "@components/Game/GamePage"
import { InferGetServerSidePropsType } from "next"
import { fetchList } from "@helpers/getPokemon"

export const getServerSideProps = async () => {
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

const Play = ({ pokemonList }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{pokemonList && <GamePage pokemonList={pokemonList} />}</div>
}

export default Play
