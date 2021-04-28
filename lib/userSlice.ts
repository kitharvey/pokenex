import { getUserData, updateUserScore } from "@helpers/getUsers"
import { UserProps, UserSessionProps } from "@interfaces/Interfaces"
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"

export const userSignIn = createAsyncThunk("user/signin", async (data: UserSessionProps) => {
  const { user } = await getUserData(data)
  return user
})

interface InitialStateProps {
  userData: UserProps | null
  status: "loading" | "success" | "failed" | null
}

const initialState: InitialStateProps = {
  userData: null,
  status: null,
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // updateFavorites: (state, action: PayloadAction<UserFavoritesProps>) => {
    //   const { payload } = action
    //   if (state.userData) {
    //     const tempFav = state.userData.favorites.map((fav) => ({
    //       id: fav.id,
    //       name: fav.name,
    //       types: fav.types,
    //     }))
    //     if (tempFav.filter((fav) => fav.id === payload.id).length > 0) {
    //       tempFav.splice(
    //         tempFav.findIndex((fav) => fav.id === payload.id),
    //         1
    //       )
    //       patchFavorites(tempFav, state.userData._id)
    //       state.userData.favorites = tempFav
    //     } else {
    //       tempFav.push(payload)
    //       patchFavorites(tempFav, state.userData._id)
    //       state.userData.favorites = tempFav
    //     }
    //   }
    // },
    updateScore: (state, action: PayloadAction<number>) => {
      const score = action.payload
      if (state.userData) {
        if (state.userData.score < score) {
          updateUserScore(state.userData._id, "score", score)
          state.userData.score = score
        }
      }
    },
    signout: (state) => {
      state.userData = null
      state.status = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userSignIn.pending, (state) => {
      state.status = "loading"
    })
    builder.addCase(userSignIn.rejected, (state) => {
      state.status = "failed"
    })
    builder.addCase(userSignIn.fulfilled, (state, { payload }) => {
      state.userData = payload
      state.status = "success"
    })
  },
})

export const { signout, updateScore } = userSlice.actions
export default userSlice.reducer
