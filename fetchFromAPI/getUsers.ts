async function getUsers(link: string) {
  const url = process.env.PORT || "http://localhost:3000"
  const reponse = await fetch(`${url + link}`)
    .then((response) => response.json())
    .then((data) => {
      return data
    })
    .catch((error) => {
      throw new Error(error)
    })

  return reponse
}

export default getUsers
