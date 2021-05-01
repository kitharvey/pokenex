import { getUsers } from "@helpers/getUsers"
import { UserProps } from "@interfaces/Interfaces"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getLeaderBoardList = createAsyncThunk("pokemon/data", async () => {
  const data = await getUsers(`/api/users`)
  return data as UserProps[]
})

interface InitialStateProps {
  list: UserProps[] | null
}

const initialState: InitialStateProps = {
  list: null,
}

const leaderboardList = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getLeaderBoardList.fulfilled, (state, { payload }) => {
      state.list = payload.sort((userA, userB) => userB.score - userA.score)
    })
  },
})

export default leaderboardList.reducer
