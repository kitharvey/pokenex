import Card from '@components/Cards/Card';
import Deck from '@components/Cards/Deck';
import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { wrap } from 'popmotion';
import React, { useEffect, useState } from 'react'
import { FaGithub } from 'react-icons/fa';

export const landingPokemons = [
    {
      id: 1,
      name: 'bulbasaur',
      types: ['grass', 'poison'],
      sprite: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/001.png",
    },
    {
      id: 4,
      name: 'charmander',
      types: ['fire'],
      sprite: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/004.png",
    },
    {
      id: 7,
      name: 'squirtle',
      types: ['water'],
      sprite: "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/007.png",
    },
  ]



const LandingPage = () => {
    const router = useRouter()
    const [index, setIndex] = useState<number>(0)
    const [exitX, setExitX] = useState<number>(1000)
    const cardIndex = wrap(0, landingPokemons.length+1, index)

    useEffect(() => {
        setTimeout(() => {
            setIndex(index + 1)
            setExitX(Math.random() < 0.5 ? 1000 : -1000)
        }, 3000)
    }, [index])


  
        return (
            <div className='landing-page' >
                <div className='left' >
                    <h1>Pokédex app in card style</h1>
                    <p>Swipe through pokemon cards or guess who's that pokemon?</p>
                    <p className='signin' >Record your score and collect your favorite pokemons by <span> <button type="button" onClick={() => signIn("github")}>signing in with <FaGithub /></button></span> </p>

                    <div className='button-wrapper' >
                        <button type='button' className='black-button' onClick={() => router.push('/explore')} >Explore</button>
                        <button type='button' className='black-button' onClick={() => router.push('/play')} >Play</button>
                    </div>
                </div>
                <div className="right">
                        <Deck
                        pokemons={landingPokemons}
                        cardIndex={cardIndex}
                        index={index}
                        setIndex={setIndex}
                        exitX={exitX}
                        setExitX={setExitX}
                        dragX={false}
                        CardComponent={Card}
                        />
                </div>
            </div>
        );
}


export default LandingPage