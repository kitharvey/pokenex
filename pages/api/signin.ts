import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"
import dbConnect from "@utils/dataBaseConnection"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect()

  let user
  const { uid, name, picture } = req.body
  const { method } = req
  if (method === "POST") {
    try {
      const isUserAlready = await User.findOne({ uid })
      if (isUserAlready) {
        user = isUserAlready
        return res.status(200).json({ user })
      } else {
        const newuser = new User({ uid, name, picture })
        user = await newuser.save()
        return res.status(201).json({ user })
      }
    } catch (err) {
      return res.status(400).json({ err })
    }
  } else {
    return res.status(400).json({ message: "invalid method" })
  }
}
