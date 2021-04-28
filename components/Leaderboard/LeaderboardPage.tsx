import { getLeaderBoardList, selectUser } from "@lib/leaderboardSlice"
import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { motion } from "framer-motion"
import { UserProps } from "interfaces/Interfaces"
import { useRouter } from "next/router"
import React, { useEffect } from "react"

interface LeaderboardPageProps {
  data: UserProps[]
}

const LeaderboardPage: React.FC<LeaderboardPageProps> = ({ data }) => {
  const router = useRouter()
  const { list } = useAppSelector((state) => state.leaderboard)
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (data) {
      dispatch(getLeaderBoardList(data))
    }
  }, [data, dispatch])

  const handleSelectUser = (user: UserProps) => {
    dispatch(selectUser(user))
    router.push(`/user/${user.uid}`)
  }

  return (
    <div className="leaderboard-page">
      {list && (
        <div className="table-wrapper">
          <div className="table-head">
            <p className="">Rank</p>
            <p className="">Name</p>
            <p className="">Score</p>
          </div>
          {list.map((user, index) => (
            <motion.div className="table-row" key={user.uid} onClick={() => handleSelectUser(user)}>
              <p className="">{index + 1}</p>
              <p className="">{user.name}</p>
              <p className="">{user.score}</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LeaderboardPage
