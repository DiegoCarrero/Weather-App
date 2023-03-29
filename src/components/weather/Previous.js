

export default function Previous({ prevSearches, city }) {

    // let currentSearch = prevSearches[prevSearches.length - 1]
    // let feelsLike = search.current_condition[0].FeelsLikeF;
    console.log(prevSearches)

    return (
        <aside>
            {
                prevSearches && (
                    <ul>
                        {
                            prevSearches.map(prevSearch => <li>{city} - {prevSearch.current_condition[0].FeelsLikeF}</li>)
                        }
                    </ul>
                ) 
            }
        </aside>
    )
}