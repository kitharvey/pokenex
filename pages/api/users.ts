import type { NextApiRequest, NextApiResponse } from "next"
import User from "@models/User"
import dbConnect from "@utils/dataBaseConnection"

dbConnect();

export default async (_request: NextApiRequest, result: NextApiResponse) => {
    // const {method} = request
    // if(method === 'GET') {
        try {
            const users = await User.find()
            result.status(200).json(users)
          } catch (error) {
            result.status(500).json({ message: error.message })
          }
    // }
}
