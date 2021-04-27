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

export interface UserSessionProps {
  name?: string | null
  picture?: string | null
  uid?: string | null
}
