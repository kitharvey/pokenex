import AccessDenied from "@components/AccessDenied/AccessDenied"
import { useSession } from "next-auth/client"
import React from "react"

const User = () => {
  const [session] = useSession()
  if (!session) return <AccessDenied />

  return <h1>User Page</h1>
}

export default User
