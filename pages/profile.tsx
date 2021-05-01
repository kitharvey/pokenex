import AccessDenied from "@components/AccessDenied/AccessDenied"
import HeadTitle from "@components/HeadTitle/HeadTitle"
import ProfilePage from "@components/Profile/ProfilePage"
import { useSession } from "next-auth/client"

const Profile = () => {
  const [session] = useSession()
  if (!session) return <AccessDenied />
  return (
    <>
      <HeadTitle title={`${session ? `Pokénex | ${session.user.name}` : "Pokénex"}`} />
      <ProfilePage />
    </>
  )
}

export default Profile
