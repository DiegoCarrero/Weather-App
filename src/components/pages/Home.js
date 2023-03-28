import Header from "../weather/Header"
import getWeather from '../../api/fetch'
import { useState } from "react"

export default function Home() {

    const [input, setInput] = useState('');
    const [search, setSearch] = useState({});
    const [prevSearches, setPrevSearches] = useState([]);

    // function updateInput(event) {
    //     setInput(event.target.value);
    // }

    function handleSubmit(event) {
        event.preventDefault();
        getWeather(input).then(response => setSearch(response));
        console.log(input)
        console.log(search)
        setInput('');
        setPrevSearches([...prevSearches, search]);
    }

    return (
        <div>
            <Header  
                input={input}
                setInput={setInput}
                // updateInput={updateInput}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}

 // useEffect(() => {
    //     getWeather().then(response => console.log(response))
    // } ,[])