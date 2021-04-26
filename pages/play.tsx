import GamePage from "@components/Game/GamePage"
import { InferGetServerSidePropsType } from "next"
import { fetchPlayList } from "@helpers/getPokemon"
import HeadTitle from "@components/HeadTitle/HeadTitle"

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
  return (
    <div>
      <HeadTitle title="Pokénex | Play" />
      {pokemons && <GamePage pokemonsList={pokemons} />}
    </div>
  )
}

export default Play
