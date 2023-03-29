

export default function Main( { search, city, test } ) {

    // let area = search.nearest_area[0].areaName[0].value
    city = city[0].toUpperCase() + city.slice(1).toLowerCase();
    
    return (
        <main>
            {
                Object.keys(search).length === 0 ? 
                <p>Choose a location to view the weather</p> 
                : 
                (
                    <article>
                        {test()}
                        <h2>{city}</h2>
                        
                    </article>
                )
                    
                
            }
        </main>
    )
}

// search.nearest_area[0].areaName[0].value