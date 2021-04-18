import React from "react"

interface ExploreCardProps {
  id: number
}

const ExploreCard: React.FC<ExploreCardProps> = ({ id }) => {
  return (
    <div>
      <p>{id}</p>
    </div>
  )
}

export default ExploreCard
