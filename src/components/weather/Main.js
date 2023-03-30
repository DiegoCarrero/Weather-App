

export default function Main( { search } ) {

    let area = search.nearest_area[0].areaName[0].value;
    let region = search.nearest_area[0].region[0].value;
    let country = search.nearest_area[0].country[0].value;
    let feelsLike = search.current_condition[0].FeelsLikeF;   
            
    return (
        <main>
            
            <article>
                <h2>{area}</h2>
                <p><strong>Area:</strong> {area}</p> 
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Country:</strong> {country}</p>
                <p><strong>Currently:</strong> Feels like {feelsLike}°F</p>
            </article>
                
        </main>
    )
}

