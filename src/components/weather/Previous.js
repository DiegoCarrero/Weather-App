import { Link } from "react-router-dom"

export default function Previous({ prevSearches /*, prevCities*/ }) {

    // let currentSearch = prevSearches[prevSearches.length - 1]
    // let feelsLike = search.current_condition[0].FeelsLikeF;
    console.log(prevSearches)
    let prevCities = []

    return (
        <aside>
            <h4>Previous Searches</h4>
            {
                prevSearches.length > 0 ? 
                    <ul>
                        {
                            prevSearches.map(prevSearch => {
                                let cityName = prevSearch.nearest_area[0].areaName[0].value
                                prevCities.push(cityName)
                                return (
                                    <li key={cityName}>
                                        <Link to={`/${prevCities[prevCities.length - 1]}`}>{cityName}</Link> - {prevSearch.current_condition[0].FeelsLikeF}°F
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