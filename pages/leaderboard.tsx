import useSWR from "swr"
import { InferGetServerSidePropsType } from "next"
import LeaderboardPage from "@components/Leaderboard/LeaderboardPage"
import getUsers from "../fetchFromAPI/getUsers"

export const getServerSideProps = async () => {
  const users = await getUsers("/api/users")
  if (!users) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      users,
    },
  }
}

const Leaderboard = ({ users }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data } = useSWR("/api/users", getUsers, { initialData: users })
  return <div>{data && <LeaderboardPage data={data} />}</div>
}

export default Leaderboard
