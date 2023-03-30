

export default function Previous({ prevSearches /*, prevCities*/ }) {

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
                            prevSearches.map(prevSearch => (
                                <li key={prevSearch.nearest_area[0].areaName[0].value}>
                                    {prevSearch.nearest_area[0].areaName[0].value} - {prevSearch.current_condition[0].FeelsLikeF}°F
                                </li>
                            ))
                        }
                    </ul>
                : <p>No previous searches</p>
            }
        </aside>
    )
}