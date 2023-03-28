import Header from "../weather/Header"

export default function Home() {

    useEffect(() => {
        getWeather().then(response => console.log(response))
      } ,[])

    return (
        <div>
            
        </div>
    )
}