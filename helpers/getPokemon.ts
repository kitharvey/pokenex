import { NameURLInterface } from "@interfaces/Interfaces"
import axios from "axios"

const headURL = "https://pokeapi.co/"
const limit = 8
export const fetchList = async () => {
  const { data: pokemonlist } = await axios.get(`${headURL}api/v2/pokemon/?limit=${limit}&offset=0`)
  const list = Promise.all(
    pokemonlist.results.map(async (pokemon: NameURLInterface) => {
      const { data } = await axios.get(pokemon.url)
      return data
    })
  )
  return list
}
export const fetchPokemonData = async (link: string) => {
  const { data } = await axios.get(link)
  return data
}
export const fetchPokemonSpeciesData = async (id: number) => {
  const { data } = await axios.get(`${headURL}api/v2/pokemon-species/${id}`)
  return data
}
export const getPokemonImage = (id: string) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`
}
