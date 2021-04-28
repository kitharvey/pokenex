import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"
import dbConnect from "@utils/dataBaseConnection"
import { getSession } from "next-auth/client"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()
  const session = await getSession({ req })
  const { id } = req.query
  const { method } = req
  if (method === "DELETE" && session) {
    try {
      const isUserAlready = await User.findById(id)
      if (isUserAlready) {
        isUserAlready.remove()
        res.json({ message: `Account was deleted` })
      }
      res.status(404).json({ message: "Cannot find user" })
    } catch (err) {
      res.status(400).json({ err })
    }
  } else {
    res.status(400).json({ message: "invalid method" })
  }
}
