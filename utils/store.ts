import { configureStore } from "@reduxjs/toolkit"
import userReducer from "@lib/userSlice"
import leaderboardReducer from "@lib/leaderboardSlice"

export const store = configureStore({
  reducer: {
    user: userReducer,
    leaderboard: leaderboardReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
