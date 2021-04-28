import LeaderboardPage from "@components/Leaderboard/LeaderboardPage"
import HeadTitle from "@components/HeadTitle/HeadTitle"
import { getUsers } from "@helpers/getUsers"
import { UserProps } from "@interfaces/Interfaces"
import useSWR from "swr"
import { InferGetServerSidePropsType, NextPageContext } from "next"
import absoluteUrl from "next-absolute-url"

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
    },
  }
}

const Leaderboard = ({ users }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { data } = useSWR<UserProps[]>(`/api/users`, getUsers, { initialData: users })
  return (
    <>
      <HeadTitle title="Pokénex | Leaderboard" />
      {data && <LeaderboardPage data={data} />}
    </>
  )
}

export default Leaderboard
