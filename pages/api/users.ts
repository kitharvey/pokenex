import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"
import dbConnect from "@utils/dataBaseConnection"

export default async (request: NextApiRequest, result: NextApiResponse) => {
  await dbConnect()

  const { method } = request
  if (method === "GET") {
    try {
      const users = await User.find()
      result.status(200).json(users)
    } catch (error) {
      result.status(500).json({ message: error.message })
    }
  } else {
    result.status(400).json({ message: "invalid method" })
  }
}
