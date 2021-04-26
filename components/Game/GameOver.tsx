import React from "react"
import { IoClose } from "react-icons/io5"

interface GameOverProps {
  score: number
  handleCloseModal: () => void
}

const GameOver: React.FC<GameOverProps> = ({ score, handleCloseModal }) => {
  return (
    <div className="gameover-modal">
      <div className="gameover-wrapper">
        <h1 className="close-modal">
          <IoClose onClick={() => handleCloseModal()} />
        </h1>
        <h1>Game Over</h1>
        <p>score: {score}</p>
      </div>
    </div>
  )
}

export default GameOver
