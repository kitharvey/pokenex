import HeadTitle from "@components/HeadTitle/HeadTitle"
import React from "react"

const Error404 = () => {
  return (
    <div className="error-page">
      <HeadTitle title="Pokénex | 404" />
      <p className="status-code">404</p>
      <p className="message">This page could not be found.</p>
    </div>
  )
}

export default Error404
