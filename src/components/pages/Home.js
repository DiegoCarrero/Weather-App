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
            // console.log(response)
            setSearch(response)
        })
        input === '' ? city = 'your current location' : city = input;
        navigate(`/${city}`)
        setInput('');
        setPrevSearches([...prevSearches, search]);
    }

    return (
        <div>
            <Header input={input} setInput={setInput} handleSubmit={handleSubmit} />
            {
                Object.keys(search).length === 0 
                ? 
                <main><p>Choose a location to view the weather</p></main> 
                :
                <Main search={search} city={city} />
            }
            {
                Object.keys(search).length !== 0
                ?
                <Summaries search={search} />
                : null
            }

            <Previous prevSearches={prevSearches} />
        </div>
    )
}