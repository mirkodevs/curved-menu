 async function getAvailableMeals() {
  let fetchedMeals = []
  try {
    const response = await fetch('http://localhost:3000/meals')
     fetchedMeals = await response.json()
    

  } catch (error) {
    setErrorMessage({ error: error.message })
  }
  return fetchedMeals
}
export default getAvailableMeals