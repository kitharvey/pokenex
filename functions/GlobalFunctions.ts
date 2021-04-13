import { NameURLInterface } from "interfaces/Interfaces"

export const shuffleDeck = (array: NameURLInterface[]) => {
  let counter = array.length

  while (counter > 0) {
    const index = Math.floor(Math.random() * counter)
    counter-=1
    const temp = array[counter]
    array[counter] = array[index]
    array[index] = temp
  }

  return array
}
