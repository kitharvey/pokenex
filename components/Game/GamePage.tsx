import Deck from "@components/Cards/Deck"
import HiddenCard from "@components/Cards/HiddenCard"
import { getOptions, shuffle } from "@helpers/GlobalFunctions"
import { NameIDInterface } from "interfaces/Interfaces"
import { useEffect, useState } from "react"
import Options from "./Options"
import {ImHeart} from 'react-icons/im'
interface ExploreProps {
  pokemonsList: NameIDInterface[]
}

const GamePage: React.FC<ExploreProps> = ({ pokemonsList }) => {
  const [pokemons, setPokemons] = useState<NameIDInterface[]>(pokemonsList)
  const [index, setIndex] = useState<number>(0)
  const [exitX, setExitX] = useState<number>(1000)
  const [options, setOptions] = useState<string[] | null>(null)
  const [reveal, setReveal] = useState<boolean>(false)
  const [chosen, setChosen] = useState<string | null>(null)
  const [score, setScore] = useState<number>(0)
  const [lives, setLives] = useState<number>(3)
  const [isGameOver, setIsGameOver] = useState<boolean>(false)
const [answer, setAnswer] = useState<string>(pokemons[index].name)
  useEffect(() => {
    if(index < pokemons.length) {
      setAnswer(pokemons[index].name)
      const tempOptions = getOptions(pokemons, pokemons[index].name)
      const shuffledOptions = shuffle(tempOptions)
      setOptions(shuffledOptions)
    }


    return () => {
      setOptions(null)
    }
  }, [pokemons, index])

  useEffect(() => {
    if(lives <= 0 || index === pokemons.length) {
      const shuffledList = shuffle(pokemons)
      setTimeout(() => {
        setIsGameOver(true)
        setPokemons(shuffledList)
        setIndex(0)
        setScore(0)
        setLives(3)
      }, 3000)
    }

  },[index, lives, pokemons])

  const handleSelect = (selected: string) => {
    if (index < pokemons.length) {
      setChosen(selected)
      setReveal(true)
      setExitX(Math.random() < 0.5 ? 1000 : -1000)

      setTimeout(() => {
        setIndex(index + 1)
        setReveal(false)
        setChosen(null)
      }, 3000)

      if (answer === selected) setScore(score + 1)
      if (answer !== selected) setLives(lives - 1)
    }
  }

  return (
    <div className="exploreplay-page">
      <h1>Who's that pokemon?</h1>
      <div className='dash' >
        <p>score: {score}</p>
        <p>{Array(lives).fill(<ImHeart/>).map( (_a, index) => <span key={index}><ImHeart/></span> )}</p>
      </div>
      {pokemons && (
      <Deck
        pokemons={pokemons}
        cardIndex={index}
        index={index}
        setIndex={setIndex}
        exitX={exitX}
        setExitX={setExitX}
        dragX={false}
        CardComponent={HiddenCard}
        reveal={reveal}
      />
      )}

      {options && (
        <Options
          options={options}
          handleSelect={handleSelect}
          reveal={reveal}
          chosen={chosen}
          answer={answer}
        />
      )}

      {isGameOver && <h1>Game Over</h1> }
    </div>
  )
}

export default GamePage
