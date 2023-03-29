

export default function Summaries({ search }) {

    console.log(search)
    let avgTemp = [search.weather[0].avgtempF, search.weather[1].avgtempF, search.weather[2].avgtempF]
    let maxTemp = [search.weather[0].maxtempF, search.weather[1].maxtempF, search.weather[2].maxtempF]
    let minTemp = [search.weather[0].mintempF, search.weather[1].mintempF, search.weather[2].mintempF]

    return (
        <section className="summaries">
            <div className="summary">
                <h3>Today</h3>
                <p><strong>Average Temperature:</strong> {avgTemp[0]}°F</p>
                <p><strong>Max Temperature:</strong> {maxTemp[0]}°F</p>
                <p><strong>Min Temperature:</strong> {minTemp[0]}°F</p>
            </div>

            <div className="summary">
                <h3>Tomorrow</h3>
                <p><strong>Average Temperature:</strong> {avgTemp[1]}°F</p>
                <p><strong>Max Temperature:</strong> {maxTemp[1]}°F</p>
                <p><strong>Min Temperature:</strong> {minTemp[1]}°F</p>
            </div>
            
            <div className="summary">
                <h3>Day After Tomorrow</h3>
                <p><strong>Average Temperature:</strong> {avgTemp[2]}°F</p>
                <p><strong>Max Temperature:</strong> {maxTemp[2]}°F</p>
                <p><strong>Min Temperature:</strong> {minTemp[2]}°F</p>
            </div>
        </section>
    )
}