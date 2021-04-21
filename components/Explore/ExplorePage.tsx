import Card from "@components/Cards/Card"
import Deck from "@components/Cards/Deck"
import useRefineItems from "@lib/useRefineItems"
import { NameIDInterface } from "interfaces/Interfaces"
import { wrap } from "popmotion"
import { useState } from "react"
import Search from "./Search"
import Undo from "./Undo"

interface ExploreProps {
  pokemonList: NameIDInterface[]
}

const ExplorePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  const { pokemons, requestFilter } = useRefineItems(pokemonList)
  const [index, setIndex] = useState<number>(0)
  const [exitX, setExitX] = useState<number>(0)
  const cardIndex = wrap(0, pokemons.length + 1, index)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    requestFilter(text)
    setIndex(0)
  }

  const handleUndo = () => {
    if (index > 0) setIndex(index - 1)
  }

  return (
    <div className="exploreplay-page">
      <Search handleSearch={handleSearch} />

      {pokemons && (
        <Deck
          pokemons={pokemons}
          cardIndex={cardIndex}
          index={index}
          setIndex={setIndex}
          exitX={exitX}
          setExitX={setExitX}
          dragX="x"
          CardComponent={Card}
        />
      )}
      <Undo handleUndo={handleUndo} />
    </div>
  )
}

export default ExplorePage
