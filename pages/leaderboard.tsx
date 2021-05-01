import LeaderboardPage from "@components/Leaderboard/LeaderboardPage"
import HeadTitle from "@components/HeadTitle/HeadTitle"
import { useSession } from "next-auth/client"
import AccessDenied from "@components/AccessDenied/AccessDenied"

const Leaderboard = () => {
  const [session] = useSession()
  if (!session) return <AccessDenied />
  return (
    <>
      <HeadTitle title="Pokénex | Leaderboard" />
      <LeaderboardPage />
    </>
  )
}

export default Leaderboard
