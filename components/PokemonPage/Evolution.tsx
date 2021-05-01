import { getIDfromURL, getPokemonImage } from "@helpers/GlobalFunctions"
import { findColor } from "@helpers/getTypeIconsAndColor"
import { useAppSelector } from "@lib/reduxHooks"
import { motion } from "framer-motion"
import React from "react"
import { useRouter } from "next/router"
import Image from "next/image"


const Evolution = () => {
  const { evolutionData, pokemonData } = useAppSelector((state) => state.pokemon)
  const router = useRouter()
  return (
    <motion.div
      className="evolution-wrapper"
      initial={{
        scale: 0,
        y: 0,
        opacity: 0,
      }}
      animate={{
        scale: 1,
        y: 0,
        opacity: 1,
      }}
    >
      {evolutionData &&
        pokemonData &&
        evolutionData.map(({ name, url }) => (
          <div key={url} className="evolution-card">
            <p className="text-xs">#{getIDfromURL(url)}</p>
            <motion.div
              className="evolution-img"
              onClick={() => router.push(`/pokemon/${+getIDfromURL(url)}`)}
              style={{
                background: `linear-gradient(0deg, rgb(255,255,255) 0%, ${findColor(pokemonData.types[0])[1]} 80%)`,
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
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 5px 15px 1px rgba(0,0,0,.25)",
              }}
              whileTap={{
                scale: 1,
                boxShadow: "0 0px 0px 0px rgba(0,0,0,.25)",
              }}
            >
              <Image
                src={getPokemonImage(+getIDfromURL(url))}
                alt={name}
                width={80}
                height={80}
                quality={50}
                priority
              />
            </motion.div>
            <p className="text-xs capitalize">{name}</p>
          </div>
        ))}
    </motion.div>
  )
}

export default Evolution
