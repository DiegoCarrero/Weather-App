import Header from "../weather/Header"
import { getWeather } from '../../api/fetch'
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";

export default function Home() {

    const [input, setInput] = useState('');
    const [search, setSearch] = useState({});
    const [prevSearches, setPrevSearches] = useState([]);
    const navigate = useNavigate();

    let { city } = useParams(); 

    useEffect(() => {
        if (Object.keys(search).length === 0) {
            navigate('/');
        }
    }, [])

    function handleSubmit(event) {
        event.preventDefault();
        getWeather(input)
        .then(response => {
            console.log(response)
            setSearch(response)
        })
        input === '' ? city = 'your-current-location' : city = input;
        navigate(`/${city}`)
        setInput('');
        setPrevSearches([...prevSearches, search]);
    }

    function test() {
        if (Object.keys(search).length !== 0) {
            return (<p>It feels like {search.current_condition[0].FeelsLikeC} degrees Celsius in {city}!!!</p>)
        }
    }

    return (
        <div>
            <Header  
                input={input}
                setInput={setInput}
                handleSubmit={handleSubmit}
            />
            {
                test()
            }
        </div>
    )
}