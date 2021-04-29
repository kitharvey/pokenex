import { configureStore } from "@reduxjs/toolkit"
import userReducer from "@lib/userSlice"
import leaderboardReducer from "@lib/leaderboardSlice"
import pokemonReducer from "@lib/pokemonSlice"
import exploreReducer from "@lib/exploreSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    leaderboard: leaderboardReducer,
    pokemon: pokemonReducer,
    explore: exploreReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
