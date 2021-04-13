import useSWR from "swr"
import { InferGetServerSidePropsType } from "next"
import { UserProps } from "interfaces/Interfaces"
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
  return (
    <div>
      <div className="container mx-auto">
        <h1 className="m-4 font-bold text-xl">Leader Board</h1>
        {data && (
          <div className="w-full bg-white rounded-md shadow">
            <div className="w-full grid grid-cols-3">
              <p className="p-2 text-center font-bold">Rank</p>
              <p className="p-2 text-center font-bold">Name</p>
              <p className="p-2 text-center font-bold">Score</p>
            </div>
            {data
              .filter((user: UserProps) => user.score > 0)
              .sort((userA: UserProps, userB: UserProps) => userB.score - userA.score)
              .map((user: UserProps, index: number) => (
                <div className="w-full grid grid-cols-3 border-t" key={user.uid}>
                  <p className="p-2 text-sm text-center">{index + 1}</p>
                  <p className="p-2 text-sm text-center">{user.displayName}</p>
                  <p className="p-2 text-sm text-center">{user.score}</p>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Leaderboard
