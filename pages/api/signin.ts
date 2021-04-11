import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"
export default async (req: NextApiRequest, res: NextApiResponse) => {
  let user
  const { uid, displayName } = req.body
  try {
    const isUserAlready = await User.findOne({ uid: uid, displayName: displayName })
    if (isUserAlready) {
      user = isUserAlready
      res.status(200).json({ user })
    } else {
      const newuser = new User({ uid, displayName })
      user = await newuser.save()
      res.status(201).json({ user })
    }
  } catch (err) {
    res.status(400).json({ err })
  }
}
