import { UserProps } from "interfaces/Interfaces"
import React from "react"

interface LeaderboardProps {
  data: UserProps[]
}

const LeaderboardPage: React.FC<LeaderboardProps> = ({ data }) => {
  return (
    <div>
      <h1 className="">Leader Board</h1>
      {data && (
        <div className="">
          <div className="">
            <p className="">Rank</p>
            <p className="">Name</p>
            <p className="">Score</p>
          </div>
          {data
            .filter((user) => user.score > 0)
            .sort((userA, userB) => userB.score - userA.score)
            .map((user, index) => (
              <div className="" key={user.uid}>
                <p className="">{index + 1}</p>
                <p className="">{user.displayName}</p>
                <p className="">{user.score}</p>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default LeaderboardPage
