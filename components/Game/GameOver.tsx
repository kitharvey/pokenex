import React from "react"
import { IoMdCloseCircle } from "react-icons/io"

interface GameOverProps {
  score: number
  handleCloseModal: () => void
}

const GameOver: React.FC<GameOverProps> = ({ score, handleCloseModal }) => {
  return (
    <div className="gameover-modal">
      <div className="gameover-wrapper">
        <h1 className="close-modal">
          <IoMdCloseCircle onClick={() => handleCloseModal()} />
        </h1>
        <h1>Game Over</h1>
        <p>score: {score}</p>
      </div>
    </div>
  )
}

export default GameOver
