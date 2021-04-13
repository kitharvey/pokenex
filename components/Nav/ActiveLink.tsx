import { useRouter } from "next/router"
import Link from "next/link"
import React, { Children } from "react"

interface ActiveLinkProps {
  children: JSX.Element
  activeClassName: string
  href: string
}

const ActiveLink: React.FC<ActiveLinkProps> = ({ children, activeClassName, ...props }) => {
  const { asPath } = useRouter()
  const child = Children.only(children)
  const childClassName = child.props.className || ""

  const className =
    asPath === props.href ? `${childClassName} ${activeClassName}`.trim() : childClassName

  return (
    <Link {...props}>
      {React.cloneElement(child, {
        className: className || null,
      })}
    </Link>
  )
}

export default ActiveLink
