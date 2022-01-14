import { useEffect, useState } from "react";


function Fetch() {
    const[hero, setHero] = useState("batman") 
    const [holdHero, setHoldHero] = useState([])

    useEffect(() => {
        async function fetchData() {
          let response = await fetch(`https://www.superheroapi.com/api.php/5144671915557298/search/batman`);
          const data = await response.json();
          setHoldHero(data);
          console.log(holdHero)
        }
        fetchData();
      }, []); 
      return(<div></div>)
    }

export default Fetch 