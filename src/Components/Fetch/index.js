import { useEffect, useState } from "react";


function Fetch() {
    const [holdHero, setHoldHero] = useState('')

    useEffect(() => {
        async function fetchData() {
          let response = await fetch(`https://www.superheroapi.com/api.php/5144671915557298/search/${'superman'}`);
          const data = await response.json();
          setHoldHero(data.results[1]);
          console.log(holdHero)
          console.log(data.results)
        }
        fetchData();
      },[setHoldHero]); 

      return(
      <div>
<h1>{holdHero.name}</h1>
<h2>{holdHero.id} </h2>
<img src={holdHero.image.url}
alt={holdHero.name}/> 
      </div>)

    }

export default Fetch 
//deploy

