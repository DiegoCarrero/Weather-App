import { useEffect } from 'react';
import { getWeather } from './api/fetch';
import './App.css';

import Header from './components/weather/Header';
import Previous from './components/weather/Previous';
import Summaries from './components/weather/Summaries';
import Weather from './components/weather/Weather';

function App() {

  useEffect(() => {
    getWeather().then(response => console.log(response))
  } ,[])

  return (
    <div className="App">
      <Header />
      <Weather />
      <Previous />
      <Summaries />
    </div>
  );
}

export default App;
