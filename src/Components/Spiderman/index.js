import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';

function Spiderman() {
  // const[hero, setHero] = useState("superman")
  const [holdHero, setHoldHero] = useState('');
  useEffect(() => {
    async function fetchData() {
      let response = await fetch(
        `https://www.superheroapi.com/api.php/5144671915557298/search/${'spider-man'}`
      );
      const data = await response.json();
      setHoldHero(data.results && data.results[0]);

      console.log(data.results);
    }
    fetchData();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return holdHero ? (
    <div>
      <nav>
        {/* <Link to="/spiderman">spiderman</Link> */}
      </nav>
      <h1>{holdHero.name}</h1>
      <h2>{holdHero.biography['full-name']} </h2>
      <img src={holdHero.image['url']} alt={holdHero.name} />
    </div>
  ) : (
    <>Loading...</>
  );
}
export default Spiderman;
