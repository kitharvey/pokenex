import { UserSessionProps, UserFavoritesProps } from "@interfaces/Interfaces"
import axios from "axios"

export async function getUsers(link: string) {
  const { data } = await axios.get(`${link}`)
  return data
}

export const getUserData = async (body: UserSessionProps) => {
  const { data } = await axios.post(`/api/signin`, body)
  return data
}

export const deleteUser = async (id: string) => {
  const { data } = await axios.delete(`/api/delete/${id}`)
  return data
}

type UpdateKey = "score" | "types" | "name"

export const updateUserScore = async (id: string, key: UpdateKey, score: number) => {
  const { data } = await axios.patch(`/api/update/${id}`, { key, score })
  return data
}
export const updateUserFavorites = async (
  id: string,
  key: UpdateKey,
  favorites: UserFavoritesProps
) => {
  const { data } = await axios.patch(`/api/update/${id}`, { key, favorites })
  return data
}
export const updateUserName = async (id: string, key: UpdateKey, name: string) => {
  const { data } = await axios.patch(`/api/update/${id}`, { key, name })
  return data
}
