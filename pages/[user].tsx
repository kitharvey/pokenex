import HeadTitle from "@components/HeadTitle/HeadTitle"
import { useRouter } from "next/router"

const User = () => {
  const router = useRouter()
  const { user } = router.query
  return (
    <>
      <HeadTitle title={`Pokénex | ${user}`} />
      <h1>{user}</h1>
    </>
  )
}

export default User
