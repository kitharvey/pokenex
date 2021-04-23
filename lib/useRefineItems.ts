import { shuffle } from "@helpers/GlobalFunctions"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import { useMemo, useState } from "react"

export type SortKey = "id" | "name"
type Direction = string

export interface SetSortConfigProps {
  key: SortKey
  direction: Direction
}

const useRefineItems = (items: PokemonDataInterface[]) => {
  const [sortConfig, setSortConfig] = useState<SetSortConfigProps | null>(null)
  const [search, setSearch] = useState<string | null>(null)
  const [filterByType, setFilterByType] = useState<string | null>(null)
  const [random, setRandom] = useState<number | null>(null)

  const refinedItems = useMemo(() => {
    const itemsCopy = [...items]
    let refinableItems = [...items]
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

    if (filterByType) {
      refinableItems = itemsCopy.filter((item) => item.types.includes(filterByType))
    }

    if (random) {
      refinableItems = shuffle(itemsCopy)
    }

    return refinableItems
  }, [items, sortConfig, search, random, filterByType])

  const requestSort = (key: SortKey) => {
    let direction = "ascending"
    if (sortConfig && sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending"
    }
    setSortConfig({ key, direction })
    setRandom(null)
  }

  const requestSearch = (name: string) => {
    setSearch(name.toLowerCase())
    setRandom(null)
  }
  const requestFilter = (type: string) => {
    setFilterByType(type)
    setRandom(null)
  }
  const requestShuffle = () => {
    setRandom(Math.random())
  }

  return {
    pokemons: refinedItems,
    requestSort,
    requestSearch,
    requestFilter,
    requestShuffle,
    sortConfig,
    setSortConfig,
  }
}

export default useRefineItems
