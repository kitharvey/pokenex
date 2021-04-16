import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"
import dbConnect from "@utils/dataBaseConnection"

export default async (request: NextApiRequest, result: NextApiResponse) => {
  await dbConnect()

  const {
    method,
    query: { id },
    body,
  } = request
  if (method === "PATCH") {
    try {
      const isUserAlready = await User.findById(id)
      if (isUserAlready) {
        isUserAlready[body.key] = body[body.key]
        const user = await isUserAlready.save()
        result.json({ user })
      }
      result.status(404).json({ message: "Cannot find user" })
    } catch (err) {
      result.status(400).json({ err })
    }
  } else {
    result.status(400).json({ message: "invalid method" })
  }
}
