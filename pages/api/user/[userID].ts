import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"
import dbConnect from "@utils/dataBaseConnection"
import { getSession } from "next-auth/client"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  const session = getSession({ req })
  const { userID } = req.query
  const { method } = req
  if (method === "GET" && session) {
    try {
      const user = await User.findById(userID)
      if (user) {
        return res.json({ user })
      }
      return res.status(404).json({ message: "Cannot find user" })
    } catch (err) {
      return res.status(400).json({ err })
    }
  } else {
    return res.status(400).json({ message: "invalid method or not authorized" })
  }
}
