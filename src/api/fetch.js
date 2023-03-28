const API_URL = 'https://wttr.in/'

export default function getWeather(city) {
    return (
        fetch(API_URL + city + '?format=j1')
        .then((response) => response.json())
        .catch((e) => console.log(e))
    )
}
