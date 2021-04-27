import { UserSessionProps } from "@interfaces/Interfaces"
import axios from "axios"

export async function getUsers(link: string) {
  const { data } = await axios.get(`${link}`)
  return data
}

export const getUserData = async (body: UserSessionProps) => {
  const { data } = await axios.post(`/api/signin`, body)
  return data
}
