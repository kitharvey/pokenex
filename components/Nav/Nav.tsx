import Link from "next/link"
import { FaCaretDown, FaGithub } from "react-icons/fa"
import { CgPlayButtonO, CgPokemon, CgProfile, CgSearch } from "react-icons/cg"
import { IoPodiumOutline } from "react-icons/io5"
import { VscSignIn } from "react-icons/vsc"
import { signIn, signOut, useSession } from "next-auth/client"
import { useEffect } from "react"
import { useAppDispatch } from "@lib/reduxHooks"
import { signout, userSignIn } from "@lib/userSlice"
import { useRouter } from "next/router"
import ActiveLink from "./ActiveLink"

const Nav = () => {
  const [session] = useSession()
  const router = useRouter()
  const dispatch = useAppDispatch()

  useEffect(() => {
    if (session && session.user) {
      dispatch(userSignIn(session.user))
    } else dispatch(signout())
  }, [session, dispatch])

  const handleSignOut = () => {
    signOut()
    router.push("/")
  }

  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="title-wrapper">
            <ActiveLink activeClassName="active" href="/">
              <h2>Pokénex</h2>
            </ActiveLink>
            <a href="https://github.com/kitharvey/pokenex" target="_blank" rel="noreferrer">
              <h2>
                <FaGithub />
              </h2>
            </a>
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
                  <Link href="/profile">
                    <a>
                      <span>
                        {session.user.name}&nbsp;
                        <FaCaretDown />
                      </span>
                    </a>
                  </Link>

                  <div className="dropdown">
                    <button type="button" onClick={handleSignOut}>
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
        <div className="navbar-mobile">
          <ActiveLink activeClassName="active" href="/">
            <span>
              <CgPokemon />
            </span>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/explore">
            <span>
              <CgSearch />
            </span>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/play">
            <span>
              <CgPlayButtonO />
            </span>
          </ActiveLink>
          <ActiveLink activeClassName="active" href="/leaderboard">
            <span>
              <IoPodiumOutline />
            </span>
          </ActiveLink>

          {session && session.user ? (
            <ActiveLink activeClassName="active" href="/profile">
              <span>
                <CgProfile />
              </span>
            </ActiveLink>
          ) : (
            <button type="button" onClick={() => signIn("github")}>
              <span>
                <VscSignIn />
              </span>
            </button>
          )}
        </div>
      </div>
    </header>
  )
}

export default Nav
