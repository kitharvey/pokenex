import {
  PokemonDataInterface,
  PokemonSpeciesDataInterface,
  NameURLInterface,
} from "@interfaces/Interfaces"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { fetchEvolutionData, fetchPokemonData, fetchSpeciesData } from "@helpers/getPokemon"
import { extractEvolutionChain } from "@helpers/GlobalFunctions"

export const getPokemonData = createAsyncThunk("pokemon/data", async (id: number) => {
  const data = await fetchPokemonData(id)
  return data
})

export const getPokemonSpeciesData = createAsyncThunk("pokemon/species", async (id: number) => {
  const data = await fetchSpeciesData(id)
  return data
})

export const getEvolutionData = createAsyncThunk("pokemon/evolution", async (link: string) => {
  const data = await fetchEvolutionData(link)
  const evolutionChain = extractEvolutionChain(data)
  return evolutionChain
})

interface InitialStateProps {
  pokemonData: PokemonDataInterface | null
  pokemonSpeciesData: PokemonSpeciesDataInterface | null
  evolutionData: NameURLInterface[] | null
}

const initialState: InitialStateProps = {
  pokemonData: null,
  pokemonSpeciesData: null,
  evolutionData: null,
}

const pokemon = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPokemonSpeciesData.fulfilled, (state, { payload }) => {
      state.pokemonSpeciesData = payload
    })
    builder.addCase(getEvolutionData.fulfilled, (state, { payload }) => {
      state.evolutionData = payload
    })
    builder.addCase(getPokemonData.fulfilled, (state, { payload }) => {
      state.pokemonData = payload
    })
  },
})

export default pokemon.reducer
