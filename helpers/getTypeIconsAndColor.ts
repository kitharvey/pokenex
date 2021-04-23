const normal = "/typeIcons/normal.png"
const fire = "/typeIcons/fire.png"
const fighting = "/typeIcons/fighting.png"
const water = "/typeIcons/water.png"
const flying = "/typeIcons/flying.png"
const grass = "/typeIcons/grass.png"
const poison = "/typeIcons/poison.png"
const electric = "/typeIcons/electric.png"
const ground = "/typeIcons/ground.png"
const psychic = "/typeIcons/psychic.png"
const rock = "/typeIcons/rock.png"
const ice = "/typeIcons/ice.png"
const bug = "/typeIcons/bug.png"
const dragon = "/typeIcons/dragon.png"
const ghost = "/typeIcons/ghost.png"
const dark = "/typeIcons/dark.png"
const steel = "/typeIcons/steel.png"
const fairy = "/typeIcons/fairy.png"

export const getTypeIcon = (type: string) => {
  const colors = {
    normal,
    fire,
    fighting,
    water,
    flying,
    grass,
    poison,
    electric,
    ground,
    psychic,
    rock,
    ice,
    bug,
    dragon,
    ghost,
    dark,
    steel,
    fairy,
  }
  const getIcon = Object.entries(colors).filter(([key]) => key === type)
  return getIcon[0]
}

export const findColor = (color: string) => {
  const colors = {
    normal: "#C4C4A4",
    fire: "#F08030",
    fighting: "#C03028",
    water: "#6890F0",
    flying: "#A890F0",
    grass: "#78C850",
    poison: "#A040A0",
    electric: "#F8D030",
    ground: "#E0C068",
    psychic: "#F85888",
    rock: "#B8A038",
    ice: "#98D8D8",
    bug: "#A8B820",
    dragon: "#7038F8",
    ghost: "#705898",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
  }
  const getColor = Object.entries(colors).filter(([key]) => key === color)
  return getColor[0]
}
