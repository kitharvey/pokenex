import Link from "next/link"
import ActiveLink from "./ActiveLink"

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <h1>
            <Link href="/"> Pokenext </Link>{" "}
          </h1>
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
