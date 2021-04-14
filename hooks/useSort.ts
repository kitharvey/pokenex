import { shuffleDeck } from "functions/GlobalFunctions";
import { NameIDInterface } from "interfaces/Interfaces";
import { useMemo, useState } from "react";

type Key = 'id' | 'name'
type Direction = string
export interface setSortConfigProps {
  key: Key
  direction: Direction
}

const useSort = (items: NameIDInterface[]) => {
  const [sortConfig, setSortConfig] = useState<setSortConfigProps | null>(null);
  const sortedItems = useMemo(() => {
    let sortableItems = [...items]
    if (sortConfig && sortConfig.key) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0;
      });
    } else {
        sortableItems = shuffleDeck([...items])
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key: Key) => {
    let direction = 'ascending'
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending'
    }
    setSortConfig({ key, direction });
  }

  return { items: sortedItems, requestSort, sortConfig, setSortConfig }
}

export default useSort
