import useSWR from "swr"
import { InferGetServerSidePropsType, NextPageContext } from "next"
import absoluteUrl from "next-absolute-url"
import LeaderboardPage from "@components/Leaderboard/LeaderboardPage"
import { getUsers } from "@helpers/getUsers"
import HeadTitle from "@components/HeadTitle/HeadTitle"

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
  return (
    <>
      <HeadTitle title="Pokénex | Leaderboard" />
      {data && <LeaderboardPage data={data} />}
    </>
  )
}

export default Leaderboard
