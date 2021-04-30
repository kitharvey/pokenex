import { getIDfromURL, getPokemonImage } from '@helpers/GlobalFunctions';
import { findColor } from '@helpers/getTypeIconsAndColor';
import { useAppSelector } from '@lib/reduxHooks';
import { motion } from 'framer-motion';
import React from 'react'
import { useRouter } from 'next/router';
import Image from "next/image"

interface EvolutionProps {

}

const Evolution: React.FC<EvolutionProps> = ({}) => {
    const {evolutionData, pokemonData} = useAppSelector(state => state.pokemon)
    const router = useRouter()
        return (
            <motion.div
            className="flex flex-wrap justify-evenly w-full mt-4"
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
            {(evolutionData && pokemonData) && (
              evolutionData.map(({ name, url }) => (
                <div key={url} className="flex flex-col items-center">
                  <p className="text-xs">#{getIDfromURL(url)}</p>
                    <motion.div
                      className="w-28 h-28 rounded-full p-4 m-2 cursor-pointer"
                      onClick={() => router.push(`/pokemon/${+getIDfromURL(url)}`)}
                      style={{
                          borderRadius: '50%',
                          height: '110px',
                          width: '110px',
                        background: `linear-gradient(0deg, ${`${
                          findColor(pokemonData.types[0])[1]
                        }10`} 0%, ${findColor(pokemonData.types[0])[1]} 80%)`,
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
                        scale: 1.1,
                        boxShadow: '0 5px 15px 1px rgba(0,0,0,.25)',
                      }}
                      whileTap={{
                        scale: 1,
                        boxShadow: '0 0px 0px 0px rgba(0,0,0,.25)',
                      }}
                    >

                        <Image src={getPokemonImage(+getIDfromURL(url))} alt={name} width={100} height={100} quality={50} priority />
                    </motion.div>
                  <p className="text-xs capitalize">{name}</p>
                </div>
              ))
            )}
          </motion.div>
        );
}


export default Evolution