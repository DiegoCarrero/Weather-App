import { getWeather } from '../../api/fetch'
import { useState } from "react"
// import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import Header from "../weather/Header"
import Main from '../weather/Main';
import Summaries from '../weather/Summaries';
import Previous from '../weather/Previous';

export default function Home() {

    const [input, setInput] = useState('');
    const [search, setSearch] = useState({});
    const [prevSearches, setPrevSearches] = useState([]);
    const [prevCities, setPrevCities] = useState([]);
    const navigate = useNavigate();

    let { city } = useParams(); 

    // Updates URL back to home when page is refreshed
    // useEffect(() => {
    //     if (Object.keys(search).length === 0) {
    //         navigate('/');
    //     }
    // }, [])

    function handleSubmit(event) {
        event.preventDefault();
        getWeather(input)
        .then(response => {
            setSearch(response)
            setPrevSearches([...prevSearches, response]);
        })
        input === '' ? city = 'Your current location' : city = input;
        city = city[0].toUpperCase() + city.slice(1).toLowerCase();
        setPrevCities([...prevCities, city]);
        navigate(`/${city}`);
        setInput('');
    }

    return (
        <div>
            <Header input={input} setInput={setInput} handleSubmit={handleSubmit} />
            {
                Object.keys(search).length !== 0 
                ? 
                <>
                    <Main search={search} city={city} />
                    <Summaries search={search} />
                    <Previous prevSearches={prevSearches} prevCities={prevCities} />
                </>
                :
                <main><p>Choose a location to view the weather</p></main>
                
            }

            
        </div>
    )
}