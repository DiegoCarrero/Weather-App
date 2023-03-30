import { Link } from "react-router-dom"

export default function Previous({ prevSearches /*, prevCities*/, setPrevCity }) {

    // let currentSearch = prevSearches[prevSearches.length - 1]
    // let feelsLike = search.current_condition[0].FeelsLikeF;
    console.log(prevSearches)
    

    return (
        <aside>
            <h4>Previous Searches</h4>
            {
                prevSearches.length > 0 ? 
                    <ul>
                        {
                            prevSearches.map(prevSearch => {
                                let cityName = prevSearch.nearest_area[0].areaName[0].value
                                
                                return (
                                    <li key={cityName}>
                                        <Link to={`/${cityName}`} onClick={() => setPrevCity(cityName)} >{cityName} - {prevSearch.current_condition[0].FeelsLikeF}°F</Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                : <p>No previous searches</p>
            }
        </aside>
    )
}