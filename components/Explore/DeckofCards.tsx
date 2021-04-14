// import { shuffleDeck } from 'functions/GlobalFunctions';
import useSort from "hooks/useSort";
import { NameIDInterface } from "interfaces/Interfaces"

interface ExploreProps {
  pokemonList: NameIDInterface[]
}

const DeckofCards: React.FC<ExploreProps> = ({ pokemonList }) => {
  const { items, requestSort, setSortConfig } = useSort(pokemonList);



  return (
    <div>
      <button onClick={() => requestSort("name")}>sort name</button>
      <button onClick={() => requestSort("id")}>sort id</button>
      <button onClick={() => setSortConfig(null)}>random</button>
      {items && items.map((pokemon) => <p key={pokemon.id}>{pokemon.name}</p>)}
    </div>
  )
}

export default DeckofCards
