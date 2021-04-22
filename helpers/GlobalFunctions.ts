import { PokemonDataInterface } from "@interfaces/Interfaces"

export const shuffle = (array: any[]) => {
  let counter = array.length

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter -= 1
    const temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }

  return array
}

export const getIDfromURL = (url: string) => {
  const tempURL = url.split("/")
  const id = +tempURL[tempURL.length - 2]
  if (id >= 10 && id < 100) return `0${id}`
  if (id >= 100) return `${id}`
  return `00${id}`
}


export const getOptions = (pokemons: PokemonDataInterface[], correctAnswer: string) => {
  let nums = new Set([correctAnswer]);
  while (nums.size < 4) {
      const random = Math.floor(Math.random() * pokemons.length)
      const pokemon = pokemons[random].species.name
      nums.add(pokemon)
  }
  return [...nums];
}