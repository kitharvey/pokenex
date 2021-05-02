import { getUsers } from "@helpers/getUsers"
import { UserProps } from "@interfaces/Interfaces"
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

export const getLeaderBoardList = createAsyncThunk("leaderboard/list", async () => {
  const data = await getUsers(`/api/users`)
  return data
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
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLeaderBoardList.fulfilled, (state, { payload }) => {
      state.list = payload
    })
  },
})

export default leaderboardList.reducer
