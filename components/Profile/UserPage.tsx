import HeadTitle from "@components/HeadTitle/HeadTitle"
import { useAppSelector } from "@lib/reduxHooks"
import Image from "next/image"

const UserPage = () => {
  const { user } = useAppSelector((state) => state.leaderboard)
  if (!user) return <></>
  return (
    <div className="profile">
      <HeadTitle title={`Pokénex | ${user.name}`} />
      <div>
        <div>
          <Image
            className="avatar"
            src={user.picture}
            alt={user.name}
            width={60}
            height={60}
            quality={80}
            priority
          />
          <p>{user.name}</p>
        </div>
      </div>
    </div>
  )
}

export default UserPage
