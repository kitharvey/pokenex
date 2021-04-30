import HeadTitle from "@components/HeadTitle/HeadTitle"
import PokemonPage from "@components/PokemonPage/PokemonPage"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import { getEvolutionData, getPokemonSpeciesData } from "@lib/pokemonSlice"
import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Pokemon = () => {
    const [pokemonData, setpokemonData] = useState<PokemonDataInterface | null>(null)
  const {pokemonList} = useAppSelector(state => state.pokemon)
  const router = useRouter()
  const dispatch = useAppDispatch()
    const {id} = router.query

    useEffect(() => {
        if(id && pokemonList){
            console.log(id)
            dispatch(getEvolutionData(+id))
            dispatch(getPokemonSpeciesData(+id))
            const data = pokemonList.filter(pokemon => pokemon.id === +id)
            setpokemonData(data[0])
        }
    }, [id])

        return <>
        {pokemonData && <HeadTitle title={`Pokénex | ${pokemonData.name}`} />}
          <PokemonPage />
        </>
}


export default Pokemon