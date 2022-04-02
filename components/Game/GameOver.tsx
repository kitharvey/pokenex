import { useAppDispatch, useAppSelector } from "@lib/reduxHooks"
import { updateScore } from "@lib/userSlice"
import { useSession } from "next-auth/client"
import Link from "next/link"
import React, { useEffect } from "react"
import { IoClose } from "react-icons/io5"

interface GameOverProps {
  score: number
  handleCloseModal: () => void
}

const GameOver: React.FC<GameOverProps> = ({ score, handleCloseModal }) => {
  const { userData } = useAppSelector((state) => state.user)
  const dispath = useAppDispatch()
  const [session] = useSession()

  useEffect(() => {
    if (session) dispath(updateScore(score))
  }, [score, dispath, session])

  return (
    <div className="modal">
      <div className="wrapper">
        <h1 className="close-modal">
          <IoClose onClick={() => handleCloseModal()} />
        </h1>
        <h1>Game Over</h1>
        <p>score: {score}</p>
        {session && <p>best score: {userData?.score}</p>}
        {session && (
          <Link href="/leaderboard">
            <a>
              <span>View Leaderboard</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default GameOver
