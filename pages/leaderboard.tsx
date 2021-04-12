import { InferGetServerSidePropsType } from "next"

export const getServerSideProps = async () => {
  const res = await fetch("http://localhost:3000/api/users")
  const data = await res.json()
  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    }
  }

  return {
    props: {
      data,
    }, // will be passed to the page component as props
  }
}

const leaderboard = ({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      {data.map((user: any) => (
        <p key={user.uid}>{user.displayName}</p>
      ))}
    </div>
  )
}

export default leaderboard
