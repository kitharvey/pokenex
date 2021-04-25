import { motion } from "framer-motion"
import React from "react"
import { FaUndoAlt } from "react-icons/fa"

interface UndoProps {
  handleUndo: () => void
}

const UndoButton: React.FC<UndoProps> = ({ handleUndo }) => {
  return (
    <motion.div
      className="item-wrapper"
      onClick={() => handleUndo()}
      style={{
        borderRadius: "50%",
        padding: "10px",
        background: "#fff",
        boxShadow: "0 0px 10px 1px #00000050",
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

export default UndoButton
