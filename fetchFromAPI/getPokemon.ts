import axios from "axios"
import { shuffleDeck } from "functions/GlobalFunctions"

export const fetchList = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0")
  const shuffledList = shuffleDeck(data.results)
  return shuffledList
}
