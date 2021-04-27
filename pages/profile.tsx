import AccessDenied from "@components/AccessDenied/AccessDenied"
import HeadTitle from "@components/HeadTitle/HeadTitle"
import ProfilePage from "@components/Profile/ProfilePage"
import { useSession } from "next-auth/client"

const Profile = () => {
  const [session] = useSession()
  if (!session) return <AccessDenied />
  return (
    <>
      {session && (
        <>
          <HeadTitle title={`Pokénex | ${session.user.name}`} />
          <ProfilePage />
        </>
      )}
    </>
  )
}

export default Profile
