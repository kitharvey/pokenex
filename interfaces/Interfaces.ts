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
