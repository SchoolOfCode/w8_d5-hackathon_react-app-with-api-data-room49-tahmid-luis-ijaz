import { useEffect, useState } from "react";


function Fetch() {
    const[hero, setHero] = useState("superman") 
    const [holdHero, setHoldHero] = useState('')

    useEffect(() => {
        async function fetchData() {
          let response = await fetch(`https://www.superheroapi.com/api.php/5144671915557298/search/${hero}`);
          const data = await response.json();
          setHoldHero(data.results);
          setHero()
          console.log(holdHero)
        }
        fetchData();
      },[hero]); 

      return(
      <div>
{/* <h1>{holdHero}</h1> */}
      </div>)
    }

export default Fetch 