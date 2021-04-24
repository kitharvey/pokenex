import Link from "next/link"
import { FaGithub } from "react-icons/fa"
import ActiveLink from "./ActiveLink"

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="title-wrapper">
            <h1>
              <Link href="/"> Pokénex </Link>{" "}
            </h1>
            <h1>
              {" "}
              <a href="https://github.com/kitharvey/pokenex" target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            </h1>
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
          </div>
        </div>
      </div>
    </header>
  )
}

export default Nav
