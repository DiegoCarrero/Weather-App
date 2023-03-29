import Header from "../weather/Header"
import { getWeather } from '../../api/fetch'
import { useState } from "react"

export default function Home() {

    const [input, setInput] = useState('');
    const [search, setSearch] = useState({});
    const [prevSearches, setPrevSearches] = useState([]);

    function handleSubmit(event) {
        event.preventDefault();
        getWeather(input)
        .then(response => {
            console.log(response)
            setSearch(response)
        })
        
        console.log(input)
        
        setInput('');
        setPrevSearches([...prevSearches, search]);
    }

    return (
        <div>
            <Header  
                input={input}
                setInput={setInput}
                handleSubmit={handleSubmit}
            />
            {
                Object.keys(search).length !== 0 ? <p>It feels like {search.current_condition[0].FeelsLikeC} degrees Celsius in Detroit!!!</p> : null
            }
        </div>
    )
}