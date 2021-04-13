import { shuffleDeck } from "functions/GlobalFunctions"
import { NameURLInterface } from "interfaces/Interfaces"
import { InferGetStaticPropsType } from "next"
import { useState } from "react"
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
  const [pokemons, setPokemons] = useState<NameURLInterface[]>(pokemonList)

  return (
    <div>
      {pokemons && pokemons.map( pokemon => <p key={pokemon.url} >{pokemon.name }</p> ) }
    </div>
  ) 
}

export default Explore
