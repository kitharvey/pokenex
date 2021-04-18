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
      animate={{
        scale: 0.95,
        y: 0,
        opacity: 1,
      }}
      whileTap={{
        rotate: -180,
        scale: 0.9,
      }}
      whileHover={{
        scale: 1.1,
      }}
    >
      <FaUndoAlt />
    </motion.div>
  )
}

export default Undo
