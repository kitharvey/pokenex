import { motion } from "framer-motion"
import React from "react"

interface OptionsProps {
  options: string[]
  handleSelect: (option: string) => void
  reveal: boolean
  chosen: string | null
  answer: string
}

const Options: React.FC<OptionsProps> = ({ options, handleSelect, reveal, chosen, answer }) => {
  const buttonBGColor = (opt: string) => {
    if (reveal) {
      if (opt === chosen) {
        if (chosen === answer) {
          return "#6EE7B7"
        }
        return "#FCA5A5"
      }
      if (answer === opt) {
        return "#6EE7B7"
      }
      return "#FFF"
    }
    return "#FFF"
  }

  return (
    <div className="options-wrapper">
      {options.map((option) => (
        <motion.div
          key={option}
          className="option"
          style={{
            background: buttonBGColor(option),
            borderRadius: "999px",
            padding: "10px 20px",
            boxShadow: "rgba(0, 0, 0, 0.314) 0px 0px 10px 1px",
            margin: "0 10px",
          }}
          onClick={() => handleSelect(option)}
          whileTap={{
            scale: 0.95,
          }}
          whileHover={{
            cursor: "pointer",
            boxShadow: "rgba(0, 0, 0, 0.314) 0px 0px 15px 1px",
          }}
        >
          <p>{option}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default Options
