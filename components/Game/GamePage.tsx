import Deck from "@components/Cards/Deck"
import HiddenCard from "@components/Cards/HiddenCard"
import { getOptions, shuffle } from "@helpers/GlobalFunctions"
import { NameIDInterface } from "interfaces/Interfaces"
import { useEffect, useState } from "react"
import Options from "./Options"

interface ExploreProps {
  pokemons: NameIDInterface[]
}

const GamePage: React.FC<ExploreProps> = ({ pokemons }) => {
  const [index, setIndex] = useState<number>(0)
  const [exitX, setExitX] = useState<number>(1000)
  const [options, setOptions] = useState<string[] | null>(null)
  const [reveal, setReveal] = useState<boolean>(false)
  const [chosen, setChosen] = useState<string | null>(null)
  const [score, setScore] = useState<number>(0)
  const [lives, setLives] = useState<number>(3)

  useEffect(() => {
    const correctAnswer = pokemons[index].name
    const tempOptions = getOptions(pokemons, correctAnswer)
    const shuffledOptions = shuffle(tempOptions)
    setOptions(shuffledOptions)
    return () => {
      setOptions(null)
    }
  }, [pokemons, index])

  const handleSelect = (selected: string) => {
    const correctAnswer = pokemons[index].name
    if (index < pokemons.length) {
      setChosen(selected)
      setReveal(true)
      setExitX(Math.random() < 0.5 ? 1000 : -1000)

      setTimeout(() => {
        setIndex(index + 1)
        setReveal(false)
        setChosen(null)
      }, 3000)
    }
    if (correctAnswer === selected) setScore(score + 1)
    if (correctAnswer !== selected) setLives(lives - 1)
  }

  return (
    <div className="exploreplay-page">
      <p>{score}</p>
      <p>{lives}</p>
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
      {options && (
        <Options
          options={options}
          handleSelect={handleSelect}
          reveal={reveal}
          chosen={chosen}
          answer={pokemons[index].name}
        />
      )}
    </div>
  )
}

export default GamePage
