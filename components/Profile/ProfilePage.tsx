import { useAppSelector } from "@lib/reduxHooks"
import ProfileComponent from "./ProfileComponent"

const ProfilePage = () => {
  const { userData } = useAppSelector((state) => state.user)

  return <>{userData && <ProfileComponent userData={userData} />}</>
}

export default ProfilePage
