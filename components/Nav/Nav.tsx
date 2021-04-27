import Link from "next/link"
import { FaCaretDown, FaGithub } from "react-icons/fa"
import { signIn, signOut, useSession } from "next-auth/client"
import { useEffect } from "react"
import { useAppDispatch } from "@lib/reduxHooks"
import { signout, userSignIn } from "@lib/userSlice"
import ActiveLink from "./ActiveLink"

const Nav = () => {
  const [session] = useSession()
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (session) {
      dispatch(userSignIn(session.user))
    } else dispatch(signout())
  }, [session, dispatch])

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="title-wrapper">
            <h2>
              <Link href="/"> Pokénex </Link>{" "}
            </h2>
            <h2>
              {" "}
              <a href="https://github.com/kitharvey/pokenex" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </h2>
          </div>
          <div className="web-menu">
            <ActiveLink activeClassName="active" href="/explore">
              <a className="nav-items">
                <span>Explore</span>
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/play">
              <a className="nav-items">
                <span>Play</span>
              </a>
            </ActiveLink>
            <ActiveLink activeClassName="active" href="/leaderboard">
              <a className="nav-items">
                <span>Leaderboard</span>
              </a>
            </ActiveLink>

            <div className="dropdown-wrapper">
              {session && session.user ? (
                <div className="account-button">
                  <span>
                    {session.user.name}&nbsp;
                    <FaCaretDown />
                  </span>
                  <div className="dropdown">
                    <Link href="/profile">
                      <span>profile</span>
                    </Link>
                    <button type="button" onClick={() => signOut()}>
                      <span>sign out</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button type="button" onClick={() => signIn("github")}>
                  <span>Sign In</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav
