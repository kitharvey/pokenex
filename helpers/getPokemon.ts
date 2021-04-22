import { NameURLInterface, PokemonTypes } from "@interfaces/Interfaces"
import axios from "axios"
import { getIDfromURL, shuffle } from "./GlobalFunctions"

const headURL = "https://pokeapi.co/"
const limit = 8
export const fetchExploreList = async () => {
  const { data: pokemonlist } = await axios.get(`${headURL}api/v2/pokemon/?limit=${limit}&offset=0`)
  const list = Promise.all(
    pokemonlist.results.map(async (pokemon: NameURLInterface) => {
      const { data } = await axios.get(pokemon.url)
      return {
        abilities: data.abilities,
        base_experience: data.base_experience,
        height: data.height,
        id: data.id,
        name: data.name,
        species: data.species,
        types: data.types.map((type: PokemonTypes) => type.type.name),
        weight: data.weight,
        stats: data.stats
      }
    })
  )
  return list
}

export const fetchPlayList = async () => {
  const { data } = await axios.get(`${headURL}api/v2/pokemon/?limit=${limit}&offset=0`)
  const list = data.results.map(({ name, url }: NameURLInterface) => ({
    name,
    id: getIDfromURL(url),
  }))
  const pokemonlist = shuffle(list)
  return pokemonlist
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
