import { NameIDInterface } from "interfaces/Interfaces"
import React from "react"
import { wrap } from 'popmotion'
import { AnimatePresence, motion } from "framer-motion"

interface DeckofCardsProps {
  pokemons: NameIDInterface[]
  setindex: (idx: number) => void
  index: number
}

const DeckofCards: React.FC<DeckofCardsProps> = ({ pokemons, setindex, index }) => {
  const cardIndex = wrap(0, pokemons.length+1, index)

  return (
    <div className="card-wrapper">
        <AnimatePresence>
          {pokemons.length >= 3 && cardIndex + 2 < pokemons.length + 1 && (
              <motion.div
                key={pokemons[cardIndex+2].id}
                style={{
                  width: 320,
                  height: 380,
                  position: 'absolute',
                  borderRadius: '10px',
                }}
                initial={{
                  scale: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 0.8,
                  y: -75,
                  opacity: 1,
                  boxShadow: '0 5px 25px 1px rgba(0,0,0,.25)',
                }}
                transition={{
                  scale: { duration: 0.5 },
                }}
              >
                <p key={pokemons[cardIndex+2].id}>{pokemons[cardIndex+2].name}</p>
              </motion.div>
            )}
          {pokemons.length >= 2 && cardIndex+1 < pokemons.length+1 && (
              <motion.div
                key={pokemons[cardIndex+1].id}
                style={{
                  width: 320,
                  height: 380,
                  position: 'absolute',
                  borderRadius: '10px',
                }}
                initial={{
                  scale: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 0.9,
                  y: -40,
                  opacity: 1,
                  boxShadow: '0 5px 25px 1px rgba(0,0,0,.25)',
                }}
                transition={{
                  scale: { duration: 0.5 },
                }}
              >
                <p key={pokemons[cardIndex+1].id}>{pokemons[cardIndex+1].name}</p>
              </motion.div>
            )}
          {pokemons.length >= 1 && cardIndex < pokemons.length + 1 && (
              <motion.div
                key={pokemons[cardIndex].id}
                style={{
                  width: 320,
                  height: 380,
                  position: 'absolute',
                  borderRadius: '10px',
                }}
                initial={{
                  scale: 0,
                  y: 0,
                  opacity: 0,
                }}
                animate={{
                  scale: 1,
                  y: 0,
                  opacity: 1,
                  boxShadow: '0 5px 25px 1px rgba(0,0,0,.25)',
                }}
                transition={{
                  scale: { duration: 0.5 },
                }}
              >
                <p key={pokemons[cardIndex].id}>{pokemons[cardIndex].name}</p>
              </motion.div>
            )}
        </AnimatePresence>
    </div>
  )
}

export default DeckofCards
