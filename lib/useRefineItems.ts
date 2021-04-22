import { shuffle } from "@helpers/GlobalFunctions"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import { useMemo, useState } from "react"

type Key = "id" | "name"
type Direction = string

export interface SetSortConfigProps {
  key: Key
  direction: Direction
}

const useRefineItems = (items: PokemonDataInterface[]) => {
  const [sortConfig, setSortConfig] = useState<SetSortConfigProps | null>(null)
  const [search, setSearch] = useState<string | null>(null)
  const [random, setRandom] = useState<number | null>(null)

  const refinedItems = useMemo(() => {
    const itemsCopy = [...items]
    let refinableItems = shuffle([...items])

    if (sortConfig && sortConfig.key) {
      refinableItems = itemsCopy.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1
        }
        return 0
      })
    }

    if (search) {
      refinableItems = itemsCopy.filter((item) => item.name.includes(search))
    }

    if (random) {
      refinableItems = shuffle(itemsCopy)
    }

    return refinableItems
  }, [items, sortConfig, search, random])

  const requestSort = (key: Key) => {
    let direction = "ascending"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
    setRandom(null)
  }

  const requestFilter = (name: string) => {
    setSearch(name.toLowerCase())
    setRandom(null)
  }
  const requestShuffle = () => {
    setRandom(Math.random())
  }

  return {
    pokemons: refinedItems,
    requestSort,
    requestFilter,
    requestShuffle,
    sortConfig,
    setSortConfig,
  }
}

export default useRefineItems
