import useSWR from "swr"
import { InferGetServerSidePropsType, NextPageContext } from "next"
import absoluteUrl from "next-absolute-url"
import LeaderboardPage from "@components/Leaderboard/LeaderboardPage"
import getUsers from "@helpers/getUsers"

export const getServerSideProps = async ({ req }: NextPageContext) => {
  const { origin } = absoluteUrl(req, "localhost:3000")
  const users = await getUsers(`${origin}/api/users`)
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
      origin,
    },
  }
}

const Leaderboard = ({ users, origin }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data } = useSWR(`${origin}/api/users`, getUsers, { initialData: users })
  return <div>{data && <LeaderboardPage data={data} />}</div>
}

export default Leaderboard
