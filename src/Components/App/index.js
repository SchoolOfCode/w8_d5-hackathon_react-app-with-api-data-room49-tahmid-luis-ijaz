import './App.css';
import { Routes, Route } from 'react-router-dom';
import FetchData from '../Fetch';
import Spiderman from '../Spiderman';
import Superman from '../Superman';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<FetchData />} />
        <Route path="spiderman" element={<Spiderman />} />
        <Route path="superman" element={<Superman />} />
      </Routes>
    </div>
  );
}

export default App;
