import HeadTitle from "@components/HeadTitle/HeadTitle"
import { useAppSelector } from "@lib/reduxHooks"
import { useRouter } from "next/router"
import { useEffect } from "react"

const User = () => {
  const { userData } = useAppSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (!userData) router.push("/")
  }, [userData])

  return (
    <>
      <HeadTitle title={`Pokénex | ${userData?.name}`} />
      <h1>{userData?.name}</h1>
    </>
  )
}

export default User
