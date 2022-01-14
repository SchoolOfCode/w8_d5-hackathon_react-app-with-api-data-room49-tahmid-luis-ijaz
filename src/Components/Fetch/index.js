import { useEffect, useState } from "react";
function Fetch() {
    // const[hero, setHero] = useState("superman") 
    const [holdHero, setHoldHero] = useState('')
    useEffect(() => {
        async function fetchData() {
          let response = await fetch(`https://www.superheroapi.com/api.php/5144671915557298/search/${'superman'}`);
          const data = await response.json();
          setHoldHero(data.results && data.results[1]);
          // setHero()
          console.log(holdHero)
          console.log(data.results)
        }
        fetchData();
        //eslint-disable-next-line react-hooks/exhaustive-deps
      },[]); 
      return(
      <div>
<h1>{holdHero.name}</h1>
<h2>{holdHero.id} </h2>
<img src= "https://www.superherodb.com/pictures2/portraits/10/100/791.jpg"
alt="superman"/> 
      </div>)
    }
export default Fetch 
//deploy
//Is this finally working?

