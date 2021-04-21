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