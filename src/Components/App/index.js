import './App.css';
// import {Routes, Route, Link} from 'react-router-dom'
import Fetch from '../Fetch';
import Spiderman from '../Spiderman';
import Superman from '../Superman';

function App() {
  return (
    <div className="App">
      <Fetch />
      <Spiderman />
      <Superman />
    </div>
  );
}

export default App;
