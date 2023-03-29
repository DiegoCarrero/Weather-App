

export default function Header({ input, setInput, handleSubmit }) {

    return (
        <section className="header">
            <h1>Weather App</h1>

            <form onSubmit={handleSubmit}>
                <input 
                    type='text' 
                    placeholder="Search a city or town"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            
        </section>
    )
}