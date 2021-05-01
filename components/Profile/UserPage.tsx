import HeadTitle from "@components/HeadTitle/HeadTitle"
import { UserProps } from "@interfaces/Interfaces"
import { useAppSelector } from "@lib/reduxHooks"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import ProfileComponent from "./ProfileComponent"

const UserPage = () => {
  const [user, setuser] = useState<UserProps | null>(null)
  const { list } = useAppSelector((state) => state.leaderboard)
  const router = useRouter()

  useEffect(() => {
    if (router.query.uid && list) {
      const data = list.filter((item) => item.uid === router.query.uid)[0]
      setuser(data)
    }
  }, [router, list, setuser])

  if (!user) return <p>No User Found</p>

  return (
    <>
      <HeadTitle title={`Pokénex | ${user.name}`} />
      <ProfileComponent userData={user} />
    </>
  )
}

export default UserPage
