

export default function Header({ input, setInput, handleSubmit }) {

    return (
        <header className="header">
            <h1>Weather App</h1>

            <form onSubmit={handleSubmit}>
                <label for='location'>Pick a Location </label>
                <input 
                    type='text' 
                    placeholder="Search a city or town"
                    value={input}
                    id='location'
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            
        </header>
    )
}