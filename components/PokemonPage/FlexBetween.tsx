import React from "react"

type FlexBetweenProps = {
  category: string
  details: React.ReactNode
}

const FlexBetween: React.FC<FlexBetweenProps> = ({ category, details }) => (
  <div className="flex-wrapper">
    <p className="text font-semibold">{category}</p>
    <div className="text-sm">{details}</div>
  </div>
)

export default FlexBetween
