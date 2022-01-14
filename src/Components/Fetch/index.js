import { useEffect, useState } from 'react';
function Fetch() {
  // const[hero, setHero] = useState("superman")
  const [holdHero, setHoldHero] = useState('');
  
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://www.superheroapi.com/api.php/5144671915557298/search/${'batman'}`
      );
      const data = await response.json();
      setHoldHero(data.results && data.results[1]);

      console.log(data.results);
    }
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return holdHero ? (
    <div>
      <h1>{holdHero.name}</h1>
      <h2>{holdHero.biography['full-name']} </h2>
      <img src={holdHero.image['url']} alt={holdHero.name} />
    </div>
  ) : (
    <>Loading...</>
  );
}
export default Fetch;
//deploy
//Is this finally working?
