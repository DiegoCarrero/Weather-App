

export default function Main( { search, city, test } ) {

    // let area = search.nearest_area[0].areaName[0].value
    city = city[0].toUpperCase() + city.slice(1).toLowerCase();

    
    let area = search.nearest_area[0].areaName[0].value
    console.log(search)    
            
        
    return (
        <main>
            
            <article>
                <h2>{city}</h2>
                <p>Area: {area}</p>  
            </article>
                
        </main>
    )
}

// search.nearest_area[0].areaName[0].value