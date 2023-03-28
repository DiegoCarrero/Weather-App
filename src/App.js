import { useEffect } from 'react';
import { getWeather } from './api/fetch';
import './App.css';

import Header from './components/Header';
import Previous from './components/Previous';
import Summaries from './components/Summaries';
import Weather from './components/Weather';

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
