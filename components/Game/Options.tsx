import React from "react"

interface OptionsProps {
  options: string[]
  handleSelect: (option: string) => void
}

const Options: React.FC<OptionsProps> = ({ options, handleSelect }) => {
  return (
    <div>
      {options.map((option) => (
        <button key={option} type="button" onClick={() => handleSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  )
}

export default Options
