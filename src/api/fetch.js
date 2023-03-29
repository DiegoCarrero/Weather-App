const API_URL = 'https://wttr.in/'

export function getWeather(city) {
    return (
        fetch(API_URL + city + '?format=j1')
        .then((response) => response.json())
        .catch((e) => console.log(e))
    )
}
