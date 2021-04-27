import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"
import dbConnect from "@utils/dataBaseConnection"

export default async (request: NextApiRequest, result: NextApiResponse) => {
  await dbConnect()

  let user
  const { uid, name, picture } = request.body
  const { method } = request
  if (method === "POST") {
    try {
      const isUserAlready = await User.findOne({ uid })
      if (isUserAlready) {
        user = isUserAlready
        result.status(200).json({ user })
      } else {
        const newuser = new User({ uid, name, picture })
        user = await newuser.save()
        result.status(201).json({ user })
      }
    } catch (err) {
      result.status(400).json({ err })
    }
  } else {
    result.status(400).json({ message: "invalid method" })
  }
}
