import ActiveLink from "./ActiveLink"

const Nav = () => {
  return (
    <div>
      <div className="web-menu">
        <ActiveLink activeClassName="active" href="/explore">
          <a className="nav-items">Explore</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/play">
          <a className="nav-items">Play</a>
        </ActiveLink>
        <ActiveLink activeClassName="active" href="/leaderboard">
          <a className="nav-items">Leaderboard</a>
        </ActiveLink>
      </div>
    </div>
  )
}

export default Nav
