import Header from "../weather/Header"
import getWeather from '../../api/fetch'
import { useState } from "react"

export default function Home() {

    const [search, setSearch] = useState({});
    const [prevSearches, setPrevSearches] = useState([]);

    // useEffect(() => {
    //     getWeather().then(response => console.log(response))
    // } ,[])

    return (
        <div>
            <Header />
        </div>
    )
}