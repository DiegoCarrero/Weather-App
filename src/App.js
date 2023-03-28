import { useEffect } from 'react';
import { getWeather } from './api/fetch';
import './App.css';

function App() {

  useEffect(() => {
    getWeather().then(response => console.log(response))
  } ,[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
