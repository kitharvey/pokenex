import { getUsers } from "@helpers/getUsers"
import { UserProps } from "@interfaces/Interfaces"
import Link from "next/link"
import useSWR from "swr"

const LeaderboardPage = () => {
  const { data: list } = useSWR<UserProps[]>(`/api/users`, getUsers)

  return (
    <div className="leaderboard-page">
      {list && (
        <div className="table-wrapper">
          <div className="table-head">
            <p className="">Rank</p>
            <p className="">Name</p>
            <p className="">Score</p>
          </div>
          {list
            .sort((a, b) => b.score - a.score)
            .map((user, index) => (
              <Link key={user._id} href={`/user/${user._id}`}>
                <a>
                  <div className="table-row">
                    <p className="">{index + 1}</p>
                    <p className="">{user.name}</p>
                    <p className="">{user.score}</p>
                  </div>
                </a>
              </Link>
            ))}
        </div>
      )}
    </div>
  )
}

export default LeaderboardPage
