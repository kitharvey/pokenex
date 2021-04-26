import { UserProps } from "interfaces/Interfaces"
import React from "react"

interface LeaderboardProps {
  data: UserProps[]
}

const LeaderboardPage: React.FC<LeaderboardProps> = ({ data }) => {
  return (
    <div className="leaderboard-page">
      {data && (
        <div className="table-wrapper">
          <div className="table-head">
            <p className="">Rank</p>
            <p className="">Name</p>
            <p className="">Score</p>
          </div>
          {data
            .filter((user) => user.score > 0)
            .sort((userA, userB) => userB.score - userA.score)
            .map((user, index) => (
              <div className="table-row" key={user.uid}>
                <p className="">{index + 1}</p>
                <p className="">{user.name}</p>
                <p className="">{user.score}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default LeaderboardPage
