import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import ActiveLink from "./ActiveLink"
import { signIn, signOut, useSession } from "next-auth/client";

const Nav = () => {
  const [session] = useSession();
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
            
            <div>
            {session && session.user ? (
          <>
            <span>{session.user.uid}</span>
            <span>{session.user.name}</span>
            <button type='button' onClick={() => signOut()}>Sign Out</button>
          </>
        ) : (
          <button type='button' onClick={() => signIn("github")}>Sign In</button>
          
        )}
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav
