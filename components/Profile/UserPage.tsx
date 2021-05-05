import HeadTitle from "@components/HeadTitle/HeadTitle"
import { getUsers } from "@helpers/getUsers"
import useSWR from "swr"
import ProfileComponent from "./ProfileComponent"

const UserPage: React.FC<{ id: string | string[] }> = ({ id }) => {
  const { data } = useSWR(`/api/user/${id}`, getUsers)
  return (
    <>
      <HeadTitle title={data ? `Pokénex | ${data.user.name}` : "Pokénex"} />
      {data && <ProfileComponent userData={data.user} />}
    </>
  )
}

export default UserPage
