import GamePage from "@components/Game/GamePage"
import { InferGetServerSidePropsType } from "next"
import { fetchPlayList } from "@helpers/getPokemon"

export const getServerSideProps = async () => {
  const pokemons = await fetchPlayList()
  if (!pokemons) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      pokemons,
    },
  }
}

const Play = ({ pokemons }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{pokemons && <GamePage pokemons={pokemons} />}</div>
}

export default Play
