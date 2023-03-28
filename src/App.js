import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/common/NavBar';
import About from './components/pages/About';
import Home from './components/pages/Home';

function App() {

  return (

    <div className="App">

      <NavBar />

      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>

      </Routes>

    </div>

  );
}

export default App;
