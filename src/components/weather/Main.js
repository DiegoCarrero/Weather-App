

export default function Main( { search, test } ) {
    return (
        <main>
            {
                Object.keys(search).length === 0 ? 
                <p>Choose a location to view the weather</p> 
                : null
            }
        </main>
    )
}