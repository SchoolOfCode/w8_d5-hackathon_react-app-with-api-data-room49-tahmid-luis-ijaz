import './App.css';
import { Routes, Route } from 'react-router-dom';
import FetchData from '../Fetch';
import Spiderman from '../Spiderman';
import Superman from '../Superman';
import AllSuperHeros from '../HomePage';
import OneSuperhero from '../OneSuperhero'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FetchData />} />
        <Route path="spiderman" element={<Spiderman />} />
        <Route path="superman" element={<Superman />} />
        <Route path="allSuperheros" element={<AllSuperHeros />} />
        <Route path="allSuperheros/:superheroId" element={<OneSuperhero />} />
      </Routes>
    </div>
  );
}

export default App;
