async function getUsers(link: string) {
  const reponse = await fetch(`${link}`)
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
