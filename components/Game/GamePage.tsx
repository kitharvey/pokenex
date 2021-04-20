import Deck from "@components/Cards/Deck"
import { NameIDInterface } from "interfaces/Interfaces"
import { wrap } from "popmotion"
import { useState } from "react"

interface ExploreProps {
  pokemonList: NameIDInterface[]
}

const GamePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  const [index, setIndex] = useState<number>(0)
  const [exitX, setExitX] = useState<number>(-1000)
  const cardIndex = wrap(0, pokemonList.length + 1, index)

  const handleNext = () => {
    if (index < pokemonList.length) setIndex(index + 1)
    setExitX(exitX < 0 ? 1000 : -1000)
  }

  return (
    <div className="exploreplay-page">
      {pokemonList && (
        <Deck
          pokemons={pokemonList}
          cardIndex={cardIndex}
          index={index}
          setIndex={setIndex}
          exitX={exitX}
          setExitX={setExitX}
          dragX={false}
        />
      )}
      <button type="button" onClick={handleNext}>
        {" "}
        next{" "}
      </button>
    </div>
  )
}

export default GamePage
