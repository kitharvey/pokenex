import { useAppSelector } from "@lib/reduxHooks"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

const LeaderboardPage = () => {
  const router = useRouter()
  const { list } = useAppSelector((state) => state.leaderboard)

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
            <motion.div className="table-row" key={user.uid} onClick={() => router.push(`/user/${user.uid}`)}>
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
