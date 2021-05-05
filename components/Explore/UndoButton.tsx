import { motion } from "framer-motion"
import React from "react"
import { FaUndoAlt } from "react-icons/fa"

interface UndoProps {
  handleUndo: () => void
}

const UndoButton: React.FC<UndoProps> = ({ handleUndo }) => {
  return (
    <motion.div
      className="undo-wrapper"
      onClick={() => handleUndo()}
      style={{
        boxShadow: "rgba(0, 0, 0, 0.314) 0 0px 10px 1px",
      }}
      whileTap={{
        rotate: -180,
      }}
      whileHover={{
        cursor: "pointer",
        boxShadow: "rgba(0, 0, 0, 0.314) 0px 0px 15px 1px",
      }}
    >
      <FaUndoAlt />
    </motion.div>
  )
}

export default UndoButton
