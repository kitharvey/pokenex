import AccessDenied from "@components/AccessDenied/AccessDenied"
import UserPage from "@components/Profile/UserPage"
import { useSession } from "next-auth/client"
import { useRouter } from "next/router"
import React from "react"

const User = () => {
  const [session] = useSession()
  const router = useRouter()

  if (!session) return <AccessDenied />

  return <>{router.query.uid && <UserPage id={router.query.uid} />}</>
}

export default User
