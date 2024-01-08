import { useEffect, useState } from "react"
import "./styles/App.css"

const randomFactEndpoint = "https://catfact.ninja/fact"
const randomImageEndpoint =  "ttps://api.api-ninjas.com/v1/randomimage?category=nature"
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
export function App(){
    
    const [fact,setFact] = useState();
const [imageUrl,setImageUrl] = useState()

//il fetch non si fa mai qui! ma in un effect

useEffect(()=>{
fetch(randomFactEndpoint)
.then (res => res.json())
.then (data => {
    const {fact} = data
    setFact(fact)


    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://picsum.photos/seed/picsum/info`)
      .then(res => res.json())
      .then(response => {
       const url = response.download_url
      
        setImageUrl(url)

      })
    })


},[])
// useEffect(()=>{},[])
// useEffect(()=>{},[])
// useEffect(()=>{},[])
return ( 
<main>

<h1 >APP de gatitos</h1>
{fact && <p>{fact}</p>}
{imageUrl && <img src = {imageUrl} alt = "randomImage form Api" width={100} height={150}></img>}
</main>
)


}