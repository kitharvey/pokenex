import { useAppSelector } from "@lib/reduxHooks"
import Image from "next/image"

const ProfilePage = () => {
  const { userData } = useAppSelector((state) => state.user)

  return (
    <div className="profile">
      {userData && (
        <div>
        <Image
            className='avatar'
            src={userData.picture}
            alt={userData.name}
            width={60}
            height={60}
            quality={80}
            priority
        />

          <p>{userData.name}</p>
        </div>
      )}
    </div>
  )
}

export default ProfilePage
