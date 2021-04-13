import axios from "axios"

export const fetchList = async () => {
  const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807&offset=0")
  return data.results
}
