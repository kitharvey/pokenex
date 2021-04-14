import axios from "axios"
import { shuffleDeck, getIDfromURL } from "functions/GlobalFunctions"
import { NameURLInterface } from "interfaces/Interfaces"

const headURL = "https://pokeapi.co/"

export const fetchList = async () => {
  const { data } = await axios.get(`${headURL}api/v2/pokemon/?limit=898&offset=0`)
  const linktoID = data.results.map(({ name, url }: NameURLInterface) => ({
    name,
    id: getIDfromURL(url),
  }))
  const shuffledList = shuffleDeck(linktoID)
  return shuffledList
}
export const fetchPokemon = async (id: number) => {
  const { data } = await axios.get(`${headURL}api/v2/pokemon/${id}`)
  const linktoID = data.results.map(({ name, url }: NameURLInterface) => ({
    name,
    id: getIDfromURL(url),
  }))
  const shuffledList = shuffleDeck(linktoID)
  return shuffledList
}
