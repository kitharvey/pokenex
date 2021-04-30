import {
  PokemonDataInterface,
  PokemonSpeciesDataInterface,
  PokemonEvolutionChainInterface,
} from "@interfaces/Interfaces"
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchEvolutionData,  fetchSpeciesData } from "@helpers/getPokemon"

export const getEvolutionData = createAsyncThunk("pokemon/evolution", async (id: number) => {
  const { user } = await fetchEvolutionData(id)
  return user
})
export const getPokemonSpeciesData = createAsyncThunk("pokemon/species", async (id: number) => {
  const { user } = await fetchSpeciesData(id)
  return user
})

interface InitialStateProps {
  pokemonList: PokemonDataInterface[] | null
  pokemonSpeciesData: PokemonSpeciesDataInterface | null
  evolutionData: PokemonEvolutionChainInterface | null
  selectedPokemon: number | null
  isShowModal: boolean
}

const initialState: InitialStateProps = {
  pokemonList: null,
  pokemonSpeciesData: null,
  evolutionData: null,
  selectedPokemon: null,
  isShowModal: false,
}

const pokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    getPokemonList: (state, action: PayloadAction<PokemonDataInterface[]>) => {
      state.pokemonList = action.payload
    },
    selectPokemon: (state, action: PayloadAction<number>) => {
      state.selectedPokemon = action.payload
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
