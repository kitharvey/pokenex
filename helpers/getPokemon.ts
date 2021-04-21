import axios from "axios"
import { shuffle, getIDfromURL } from "@helpers/GlobalFunctions"
import { NameURLInterface } from "interfaces/Interfaces"

const headURL = "https://pokeapi.co/"

export const fetchList = async () => {
  const { data } = await axios.get(`${headURL}api/v2/pokemon/?limit=807&offset=0`)
  const linktoID = data.results.map(({ name, url }: NameURLInterface) => ({
    name,
    id: getIDfromURL(url),
  }))
  const shuffledList = shuffle(linktoID)
  return shuffledList
}
export const fetchPokemonData = async (id: number) => {
  const { data } = await axios.get(`${headURL}api/v2/pokemon/${id}`)
  return data
}
export const fetchPokemonSpeciesData = async (id: number) => {
  const { data } = await axios.get(`${headURL}api/v2/pokemon-species/${id}`)
  return data
}
export const getPokemonImage = (id: string) => {
  return `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${id}.png`
}