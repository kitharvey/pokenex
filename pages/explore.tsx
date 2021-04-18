import { InferGetServerSidePropsType } from "next"
import ExplorePage from "@components/Explore/ExplorePage"
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

const Explore = ({ pokemonList }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return <div>{pokemonList && <ExplorePage pokemonList={pokemonList} />}</div>
}

export default Explore
