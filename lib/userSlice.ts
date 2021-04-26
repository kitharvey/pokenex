import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialStateProps {
  reveal: boolean
}

const initialState: InitialStateProps = {
  reveal: false,
}

const userSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setReveal: (state, action: PayloadAction<boolean>) => {
      state.reveal = action.payload
    },
  },
})

export const { setReveal } = userSlice.actions
export default userSlice.reducer
