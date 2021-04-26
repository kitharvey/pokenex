import Image from "next/image"
import React from "react"

const EndCard: React.FC = () => {
  return (
    <div className="card-container">
      <div
        className="card"
        style={{
          boxShadow: "inset 0 0 100px 0px #00000075",
        }}
      >
        <Image
          src="/pokemon-egg.png"
          alt="pokemon egg"
          width={260}
          height={260}
          quality={50}
          priority
        />
        <p className="name">End of Deck</p>
      </div>
    </div>
  )
}

export default EndCard
