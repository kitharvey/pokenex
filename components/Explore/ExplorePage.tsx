import useRefineItems from "@lib/useRefineItems"
import { NameIDInterface } from "interfaces/Interfaces"
import { useState } from "react"
import DeckofCards from "./DeckofCards"
import Search from "./Search"
import Undo from "./Undo"

interface ExploreProps {
  pokemonList: NameIDInterface[]
}

const ExplorePage: React.FC<ExploreProps> = ({ pokemonList }) => {
  const { pokemons, requestFilter } = useRefineItems(pokemonList)
  const [index, setindex] = useState<number>(0)

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value
    requestFilter(text)
    setindex(0)
  }

  const handleUndo = () => {
    if(index > 0) setindex(index-1)
  }

  return (
    <div className='explore-page' >
     <Search handleSearch={handleSearch} />
      <p>{index}</p>
      <Undo handleUndo={handleUndo} />
      {pokemons && <DeckofCards pokemons={pokemons} index={index} setindex={setindex} />}
    </div>
  )
}

export default ExplorePage
