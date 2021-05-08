import NextAuth from "next-auth"
import Providers from "next-auth/providers"
import { NextApiRequest, NextApiResponse } from "next"

export default (request: NextApiRequest, result: NextApiResponse) =>
  NextAuth(request, result, {
    providers: [
      Providers.GitHub({
        clientId: process.env.GITHUB_CLIENT_ID,
        clientSecret: process.env.GITHUB_CLIENT_SECRET,
        scope: "name picture sub"
      }),
    ],
    session: {
      maxAge: 60 * 60 * 24,
    },
    secret: process.env.AUTH_SECRET,
    jwt: {
      secret: process.env.JWT_SECRET,
    },
    callbacks: {
      session: async (session, user) => {
        session.user = {
          name: user.name,
          picture: user.picture as string,
          uid: user.sub as string,
        }
        return Promise.resolve(session)
      },
    },
  })
