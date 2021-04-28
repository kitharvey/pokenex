import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"
import dbConnect from "@utils/dataBaseConnection"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()

  const { method } = req
  if (method === "GET") {
    try {
      const users = await User.find()
      res.status(200).json(users)
    } catch (error) {
      res.status(500).json({ message: error.message })
    }
  } else {
    res.status(400).json({ message: "invalid method" })
  }
}
