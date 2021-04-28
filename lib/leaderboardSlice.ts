import { UserProps } from "@interfaces/Interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


interface InitialStateProps {
    list: UserProps[] | null
    user: UserProps | null
}

const initialState: InitialStateProps = {
    list: null,
    user: null,
}

const leaderboardList = createSlice({
    name: "leaderboard",
    initialState,
    reducers: {
        getLeaderBoardList: (state, action: PayloadAction<UserProps[]>) => {
            // const list = action.payload.sort((userA, userB) => userB.score - userA.score)
            console.log(action.payload)
            state.list = action.payload
        },
            
        selectUser: (state, action: PayloadAction<UserProps>) => {
            state.user = action.payload
        },
    },
  })
  
  export const { selectUser, getLeaderBoardList } = leaderboardList.actions
  export default leaderboardList.reducer