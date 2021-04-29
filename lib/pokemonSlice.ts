import {
  PokemonDataInterface,
  PokemonSpeciesDataInterface,
  PokemonEvolutionChainInterface,
} from "@interfaces/Interfaces"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchPokemonData } from "@helpers/getPokemon"

export const getPokemonSpeciesData = createAsyncThunk("pokemon/species", async (link: string) => {
  const { user } = await fetchPokemonData(link)
  return user
})
export const getEvolutionData = createAsyncThunk("pokemon/evolution", async (link: string) => {
  const { user } = await fetchPokemonData(link)
  return user
})

interface InitialStateProps {
  pokemonList: PokemonDataInterface[] | null
  pokemonData: PokemonDataInterface | null
  pokemonSpeciesData: PokemonSpeciesDataInterface | null
  evolutionData: PokemonEvolutionChainInterface | null
  isShowModal: boolean
}

const initialState: InitialStateProps = {
  pokemonList: null,
  pokemonData: null,
  pokemonSpeciesData: null,
  evolutionData: null,
  isShowModal: false,
}

const pokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemonList: (state, action: PayloadAction<PokemonDataInterface[]>) => {
      state.pokemonList = action.payload
    },
    selectPokemon: (state, action: PayloadAction<PokemonDataInterface>) => {
      state.pokemonData = action.payload
    },
    showModal: (state, action: PayloadAction<boolean>) => {
      state.isShowModal = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemonSpeciesData.fulfilled, (state, { payload }) => {
      state.pokemonSpeciesData = payload
    })
    builder.addCase(getEvolutionData.fulfilled, (state, { payload }) => {
      state.evolutionData = payload
    })
  },
})

export const { getPokemonList, selectPokemon, showModal } = pokemon.actions
export default pokemon.reducer
