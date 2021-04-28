import AccessDenied from "@components/AccessDenied/AccessDenied"
import UserPage from "@components/Profile/UserPage"
import { useSession } from "next-auth/client"
import React from "react"

const User = () => {
  const [session] = useSession()
  if (!session) return <AccessDenied />

  return <UserPage/>
}

export default User
