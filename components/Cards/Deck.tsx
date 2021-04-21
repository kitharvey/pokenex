import { NameIDInterface } from "@interfaces/Interfaces"
import { AnimatePresence, PanInfo } from "framer-motion"
import React, { useEffect, useState } from "react"
import FramerCard from "./FramerCard"

interface DeckProps {
  pokemons: NameIDInterface[]
  cardIndex: number
  exitX: number
  setExitX?: (x: number) => void
  index: number
  setIndex?: (x: number) => void
  dragX: boolean | "x" | "y"
}

const Deck: React.FC<DeckProps> = ({
    pokemons,
    cardIndex,
    exitX,
    setExitX,
    index,
    setIndex,
    dragX,
  }) => {

  const [reveal, setReveal] = useState<boolean>(false)
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

  useEffect(() => {
    setReveal(true)
    setTimeout(() => {
      setReveal(false)
    }, 3000)
  }, [index])



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
              <p>{pokemons[cardIndex].name}&nbsp;{pokemons[cardIndex].id}</p>
            ) : (
              <p>end</p>
            )}
          </FramerCard>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Deck
