import FramerCard from "@components/Cards/FramerCard"
import useRefineItems from "@lib/useRefineItems"
import { AnimatePresence } from "framer-motion"
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
    <div className="explore-page">
      <Search handleSearch={handleSearch} />

      <div className="card-wrapper">
        <AnimatePresence>
          {pokemons.length >= 3 && cardIndex + 2 < pokemons.length + 1 && (
            <FramerCard
              key={cardIndex + 2}
              index={cardIndex + 2}
              initial={{
                scale: 0,
                y: 0,
                opacity: 0,
              }}
              animate={{
                scale: 0.8,
                y: -75,
                opacity: 1,
                boxShadow: "0 5px 25px 1px rgba(0,0,0,.5)",
              }}
              transition={{
                scale: { duration: 0.5 },
              }}
            >
              {pokemons && cardIndex + 2 < pokemons.length ? (
                <p>{pokemons[cardIndex + 2].name}</p>
              ) : (
                <p>end</p>
              )}
            </FramerCard>
          )}
          {pokemons.length >= 2 && cardIndex + 1 < pokemons.length + 1 && (
            <FramerCard
              key={cardIndex + 1}
              index={cardIndex + 1}
              animate={{
                scale: 0.9,
                y: -40,
                opacity: 1,
                boxShadow: "0 5px 25px 1px rgba(0,0,0,.5)",
              }}
              transition={{
                scale: { duration: 0.5 },
              }}
            >
              {pokemons && cardIndex + 1 < pokemons.length ? (
                <p>{pokemons[cardIndex + 1].name}</p>
              ) : (
                <p>end</p>
              )}
            </FramerCard>
          )}
          {pokemons.length >= 1 && cardIndex < pokemons.length + 1 && (
            <FramerCard
              key={cardIndex}
              index={cardIndex}
              initial={{
                scale: 1,
                y: 40,
                opacity: 1,
              }}
              animate={{
                scale: 1,
                y: 0,
                opacity: 1,
                boxShadow: "0 5px 25px 1px rgba(0,0,0,.5)",
              }}
              transition={{
                scale: { duration: 0.15 },
              }}
              whileTap={{
                cursor: "grabbing",
              }}
              whileHover={{
                cursor: "grab",
              }}
              exitX={exitX}
              setExitX={setExitX}
              setIndex={setIndex}
              drag="x"
            >
              {pokemons && cardIndex < pokemons.length ? (
                <p>{pokemons[cardIndex].name}</p>
              ) : (
                <p>end</p>
              )}
            </FramerCard>
          )}
        </AnimatePresence>
      </div>

      <Undo handleUndo={handleUndo} />
    </div>
  )
}

export default ExplorePage
