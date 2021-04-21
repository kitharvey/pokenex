export interface UserFavoritesProps {
  id: number
  name: string
  types: string[]
  _id?: string
}

export interface UserProps {
  favorites: UserFavoritesProps[]
  _id: string
  uid: string
  displayName: string
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

export interface NameURLInterface {
  name: string
  url: string
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

export interface GetPokemonDataInterface {
  abilities: PokemonAbilities[]
  base_experience: number
  height: number
  id: number
  is_default: boolean
  location_area_encounters: string
  name: string
  order: number
  species: NameURLInterface
  types: PokemonTypes[]
  weight: number
  stats: PokemonStats[]
}