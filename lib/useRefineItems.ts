import { shuffle } from "@helpers/GlobalFunctions"
import { UserFavoritesProps } from "@interfaces/Interfaces"
import { useMemo, useState } from "react"

export type SortKey = "id" | "name" | null

const useRefineItems = (items: UserFavoritesProps[]) => {
  const [sortKey, setSortKey] = useState<SortKey>("id")
  const [search, setSearch] = useState<string>("")
  const [filterByType, setFilterByType] = useState<string>("")

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

    if (!sortKey) {
      refinableItems = shuffle(itemsCopy)
    }

    if (search || filterByType) {
      refinableItems = itemsCopy.filter((item) => {
        if (
          search &&
          filterByType &&
          item.name.includes(search) &&
          item.types.includes(filterByType)
        ) {
          return item
        }
        if (search && !filterByType && item.name.includes(search)) {
          return item
        }
        if (!search && filterByType && item.types.includes(filterByType)) {
          return item
        }
        return null
      })
    }

    return refinableItems
  }, [items, sortKey, search, filterByType])

  const requestSort = (key: SortKey) => {
    setSortKey(key)
  }

  const requestSearch = (name: string) => {
    setSearch(name.toLowerCase())
  }
  const requestFilter = (type: string) => {
    setFilterByType(type)
  }

  return {
    refinedItems,
    requestSort,
    requestSearch,
    requestFilter,
    sortKey,
    search,
    filterByType,
  }
}

export default useRefineItems
