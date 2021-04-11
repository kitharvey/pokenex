import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"

export default async (_request: NextApiRequest, result: NextApiResponse) => {
  try {
    const users = await User.find()
    result.status(200).json(users)
  } catch (error) {
    result.status(500).json({ message: error.message })
  }
}
