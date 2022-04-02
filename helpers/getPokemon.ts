import { NameURLInterface, PokemonTypes } from "@interfaces/Interfaces"
import axios from "axios"
import { getIDfromURL, getPokemonImage } from "./GlobalFunctions"

const headURL = "https://pokeapi.co/"
const limit = process.env.NODE_ENV === "production" ? 807 : 8
export const fetchExploreList = async () => {
  const { data: pokemonlist } = await axios.get(`${headURL}api/v2/pokemon/?limit=${limit}&offset=0`)
  const list = Promise.all(
    pokemonlist.results.map(async (pokemon: NameURLInterface) => {
      const { data } = await axios.get(pokemon.url)
      return {
        id: data.id,
        name: data.species.name,
        types: data.types.map((type: PokemonTypes) => type.type.name),
        sprite: getPokemonImage(data.id),
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
  const pokemonlist = list
  return pokemonlist
}

export const fetchPokemonData = async (id: number) => {
  const { data } = await axios.get(`${headURL}api/v2/pokemon/${id}`)
  return {
    abilities: data.abilities,
    base_experience: data.base_experience,
    height: data.height,
    id: data.id,
    name: data.species.name,
    species: data.species,
    types: data.types.map((type: PokemonTypes) => type.type.name),
    weight: data.weight,
    stats: data.stats,
    sprite: getPokemonImage(data.id),
  }
}

export const fetchEvolutionData = async (link: string) => {
  const { data } = await axios.get(link)
  return data
}
export const fetchSpeciesData = async (id: number) => {
  const { data } = await axios.get(`${headURL}api/v2/pokemon-species/${id}/`)
  return data
}
