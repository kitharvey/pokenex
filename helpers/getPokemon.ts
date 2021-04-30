import { NameURLInterface, PokemonTypes } from "@interfaces/Interfaces"
import axios from "axios"
import { getIDfromURL, getPokemonImage, shuffle } from "./GlobalFunctions"

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
        name: data.species.name,
        species: data.species,
        types: data.types.map((type: PokemonTypes) => type.type.name),
        weight: data.weight,
        stats: data.stats,
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
  const pokemonlist = shuffle(list)
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


export const fetchEvolutionData = async (id: number) => {
  const {data} = await axios.get(`${headURL}api/v2/evolution-chain/${id}/`)
  return data
}
export const fetchSpeciesData = async (id: number) => {
  const {data} = await axios.get(`${headURL}api/v2/pokemon-species/${id}/`)
  return data
}
