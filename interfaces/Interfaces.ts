export interface UserFavoritesProps {
  id: number
  name: string
  types: string[]
  sprite: string
  _id?: string
}

export interface UserProps {
  favorites: UserFavoritesProps[]
  _id: string
  uid: string
  name: string
  picture: string
  score: number
  __v: number
}

export interface NameURLInterface {
  name: string
  url: string
}
export interface NameIDInterface {
  name: string
  id: string
}

interface PokemonAbilities {
  ability: NameURLInterface
  is_hidden: boolean
}
export interface PokemonTypes {
  slot: number
  type: NameURLInterface
}
interface PokemonStats {
  base_stat: number
  effort: number
  stat: NameURLInterface
}

export interface PokemonDataInterface {
  abilities: PokemonAbilities[]
  base_experience: number
  height: number
  id: number
  name: string
  species: NameURLInterface
  types: string[]
  weight: number
  stats: PokemonStats[]
  sprite: string
}

interface FlavorTextEntry {
  flavor_text: string
  language: { name: string; url: string }
}

interface Genera {
  genus: string
  language: {
    name: string
    url: string
  }
}

export interface PokemonSpeciesDataInterface {
  base_happiness: number
  capture_rate: number
  evolution_chain: { url: string }
  flavor_text_entries: FlavorTextEntry[]
  gender_rate: number
  generation: { name: string; url: string }
  growth_rate: { name: string; url: string }
  is_legendary: boolean
  is_mythical: boolean
  shape: { name: string; url: string }
  genera: Genera[]
}

interface Chain {
  is_baby: boolean
  species: NameURLInterface
  evolution_details: {
    item: NameURLInterface
    trigger: NameURLInterface
    gender: number
    held_item: NameURLInterface
    known_move: NameURLInterface
    known_move_type: NameURLInterface
    location: NameURLInterface
    min_level: NameURLInterface
    min_happiness: NameURLInterface
    min_beauty: NameURLInterface
    min_affection: NameURLInterface
    needs_overworldRain: boolean
    party_species: NameURLInterface
    party_type: NameURLInterface
    relative_physicalStats: number
    time_of_day: string
    trade_species: NameURLInterface
    turn_upside_down: boolean
  }[]
  evolves_to: Chain[]
}

export interface PokemonEvolutionChainInterface {
  baby_trigger_item: null
  chain: Chain
}

export interface UserSessionProps {
  name?: string | null
  picture?: string | null
  uid?: string | null
}
