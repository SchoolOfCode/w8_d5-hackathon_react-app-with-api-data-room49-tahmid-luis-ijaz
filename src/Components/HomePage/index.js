import { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'

// const AllSuperHeros = () =>{} (this is called an arrow function)
function AllSuperHeros() {
 const [typed, setTyped] = useState('')
 const [searchResult, setSearchResult] = useState([])
  
  // useEffect(() => {
  //   async function fetchData() {
  
  async function handleSubmit() { 
    // const formattedWord = typed.charAt(0).toUpperCase() + typed.slice(1)
    // console.log(formattedWord) - this is what we need to do if the api is sticky about lower and uppercase letters.

    let response = await fetch(
      `https://www.superheroapi.com/api.php/5144671915557298/search/${typed}`
    );
    const data = await response.json();
    setSearchResult(data.results);
    
  
    
  }
  return (
    <>
    
     <h1>Home Page</h1>

  <input type="text" id="lname" name="lname" onChange={e => setTyped(e.target.value)}/>
  <input type="submit" value="Submit" onClick={handleSubmit}/>

  { searchResult && searchResult.map((result, index) => {
const location = {
  pathname: `/allSuperheros/${result.id}`,
  state: {result}
}

     return <div key={index}>
      <Link key={index} to={location}
      
      ><p>{result.name}</p>
      </Link>
       <img src={result.image['url']} alt={result.name} />
     </div>
   })
  
  } 

   </>
   ) 
  //   <>Loading...</>
  // );
}
export default AllSuperHeros;
//deploy
//Is this finally working?
//coming on to a home page and searching up a hero. 

