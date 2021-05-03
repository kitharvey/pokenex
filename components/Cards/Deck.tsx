// import { NameIDInterface, PokemonDataInterface } from "@interfaces/Interfaces"
import { AnimatePresence, PanInfo } from "framer-motion"
import React from "react"
import EndCard from "./EndCard"
// import { CardProps } from "./Card"
import FramerCard from "./FramerCard"

interface DeckProps {
  pokemons: any[]
  cardIndex: number
  exitX: number
  setExitX?: (x: number) => void
  index: number
  setIndex?: (x: number) => void
  dragX: boolean | "x" | "y"
  CardComponent: React.FC<any>
  reveal?: boolean
}

const Deck: React.FC<DeckProps> = ({
  pokemons,
  cardIndex,
  exitX,
  setExitX,
  index,
  setIndex,
  dragX,
  CardComponent,
  reveal,
}) => {
  const maximumX = 200

  function handleDragEnd(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    if (info.offset.x < -maximumX) {
      if (setExitX) setExitX(-maximumX * 5)
      if (setIndex) setIndex(index + 1)
    }
    if (info.offset.x > maximumX) {
      if (setExitX) setExitX(maximumX * 5)
      if (setIndex) setIndex(index + 1)
    }
  }

  return (
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
            }}
            transition={{
              scale: { duration: 0.5 },
            }}
          >
            {pokemons && cardIndex + 2 < pokemons.length ? (
              <CardComponent pokemon={pokemons[cardIndex + 2]} reveal={reveal} />
            ) : (
              <EndCard />
            )}
          </FramerCard>
        )}
        {pokemons.length >= 2 && cardIndex + 1 < pokemons.length + 1 && (
          <FramerCard
            key={cardIndex + 1}
            index={cardIndex + 1}
            initial={{
              scale: 0.8,
              y: -75,
              opacity: 1,
            }}
            animate={{
              scale: 0.9,
              y: -40,
              opacity: 1,
            }}
            transition={{
              scale: { duration: 0.5 },
            }}
          >
            {pokemons && cardIndex + 1 < pokemons.length ? (
              <CardComponent pokemon={pokemons[cardIndex + 1]} reveal={reveal} />
            ) : (
              <EndCard />
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
              opacity: 0,
            }}
            animate={{
              scale: 1,
              y: 0,
              opacity: 1,
            }}
            transition={{
              scale: { duration: 0.15 },
            }}
            whileTap={{
              cursor: dragX ? "grabbing" : "auto",
            }}
            whileHover={{
              cursor: dragX ? "grab" : "auto",
            }}
            handleDragEnd={handleDragEnd}
            exitX={exitX}
            setExitX={setExitX}
            setIndex={setIndex}
            drag={dragX}
          >
            {pokemons && cardIndex < pokemons.length ? (
              <CardComponent pokemon={pokemons[cardIndex]} reveal={reveal} />
            ) : (
              <EndCard />
            )}
          </FramerCard>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Deck
