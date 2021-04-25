import { shuffle } from "@helpers/GlobalFunctions"
import { PokemonDataInterface } from "@interfaces/Interfaces"
import { useMemo, useState } from "react"

export type SortKey = "id" | "name"

const useRefineItems = (items: PokemonDataInterface[]) => {
  const [sortKey, setSortConfig] = useState<SortKey | null>("id")
  const [search, setSearch] = useState<string>("")
  const [filterByType, setFilterByType] = useState<string>("")
  const [random, setRandom] = useState<number | null>(null)

  const refinedItems = useMemo(() => {
    const itemsCopy = [...items]
    let refinableItems = [...items]
    if (sortKey) {
      refinableItems = itemsCopy.sort((a, b) => {
        if (a[sortKey] < b[sortKey]) {
          return -1
        }
        if (a[sortKey] > b[sortKey]) {
          return 1
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
  }, [items, sortKey, search, random, filterByType])

  const requestSort = (key: SortKey) => {
    setSortConfig(key)
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
    setFilterByType("")
    setSearch("")
    setSortConfig(null)
  }

  return {
    pokemons: refinedItems,
    requestSort,
    requestSearch,
    requestFilter,
    requestShuffle,
    sortConfig: sortKey,
    setSortConfig,
    search,
    filterByType,
  }
}

export default useRefineItems
