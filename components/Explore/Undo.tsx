import { motion } from "framer-motion"
import React from "react"
import { FaUndoAlt } from "react-icons/fa"

interface UndoProps {
  handleUndo: () => void
}

const Undo: React.FC<UndoProps> = ({ handleUndo }) => {
  return (
    <motion.div
      className="item-wrapper"
      onClick={() => handleUndo()}
      style={{
        borderRadius: "50%",
        padding: "10px",
      }}
      whileTap={{
        rotate: -180,
      }}
      whileHover={{
        cursor: "pointer",
      }}
    >
      <FaUndoAlt />
    </motion.div>
  )
}

export default Undo
