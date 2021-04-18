import { NameIDInterface } from '@interfaces/Interfaces'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'


interface InitialStateProps {
  pokemonList: NameIDInterface[] | null,
  status: 'loading' | 'success' | 'failed',
  pokemonIndex: number,
  pokemonSearch: string,
  pokemonListLength: number
}

const initialState: InitialStateProps = {
  pokemonList: null,
  status: 'loading',
  pokemonIndex: 0,
  pokemonSearch: '',
  pokemonListLength: 0,
}

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState,
  reducers: {
    setPokemonIndex: (state, action: PayloadAction<number>) => {
      state.pokemonIndex = action.payload
    },
    setPokemonListLength: (state, action: PayloadAction<number>) => {
      state.pokemonListLength = action.payload
    },
    setPokemonSearch: (state, action: PayloadAction<string>) => {
      state.pokemonSearch = action.payload
    },
  }
})

export const { setPokemonIndex, setPokemonSearch, setPokemonListLength } = pokemonSlice.actions
export default pokemonSlice.reducer
