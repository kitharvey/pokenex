import Card from "@components/Cards/Card"
import Deck from "@components/Cards/Deck"
import { shuffle } from "@helpers/GlobalFunctions"
import { NameIDInterface } from "interfaces/Interfaces"
import { useEffect, useState } from "react"
import Options from "./Options"

interface ExploreProps {
  pokemonList: NameIDInterface[]
}

const GamePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  const [index, setIndex] = useState<number>(0)
  const [exitX, setExitX] = useState<number>(1000)
  const [options, setOptions] = useState<number[] | null>(null)
  const [reveal, setReveal] = useState<boolean>(false)
  const [selected, setSelected] = useState<number | null>(null)
  const [score, setScore] = useState<number>(0)
  const [lives, setLives] = useState<number>(3)

  useEffect(() => {
    const tempOptions: number[] = []
    while (tempOptions.length < 3 && !tempOptions.includes(index)) {
      tempOptions.push(Math.floor(Math.random() * pokemonList.length))
    }
    tempOptions.push(index)
    const shuffledOptions = shuffle(tempOptions)
    setOptions(shuffledOptions)
    return () => {
      setOptions(null)
    }
  }, [pokemonList, index])

  const handleSelect = (option: number) => {
    if (index < pokemonList.length) {
      setSelected(option)
      setReveal(true)
      setExitX(Math.random() < 0.5 ? 1000 : -1000)

      setTimeout(() => {
        setIndex(index + 1)
        setReveal(false)
        setSelected(null)
      }, 3000)
    }
    if (index === option) setScore(score + 1)
    if (index !== option) setLives(lives - 1)
  }

  return (
    <div className="exploreplay-page">
      <p>{score}</p>
      <p>{lives}</p>
      <Deck
        pokemons={pokemonList}
        cardIndex={index}
        index={index}
        setIndex={setIndex}
        exitX={exitX}
        setExitX={setExitX}
        dragX={false}
        CardComponent={Card}
      />
      {options && <Options options={options} pokemonList={pokemonList} handleSelect={handleSelect} />}
    </div>
  )
}

export default GamePage
