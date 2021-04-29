import { PokemonDataInterface } from "@interfaces/Interfaces"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type SortKey = "id" | "name"

interface InitialStateProps {
  refinedList: PokemonDataInterface[] | null
  sortKey: SortKey | null
  search: string
  filterByType: string
}

const initialState: InitialStateProps = {
  refinedList: null,
  sortKey: null,
  search: "",
  filterByType: "",
}

const explore = createSlice({
  name: "explore",
  initialState,
  reducers: {
    refineList: (state, action: PayloadAction<PokemonDataInterface[]>) => {
      state.refinedList = action.payload
    },
    setSortKey: (state, action: PayloadAction<SortKey | null>) => {
      state.sortKey = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setfilterByType: (state, action: PayloadAction<string>) => {
      state.filterByType = action.payload
    }
  },
})

export const { refineList, setSortKey, setSearch, setfilterByType } = explore.actions
export default explore.reducer
