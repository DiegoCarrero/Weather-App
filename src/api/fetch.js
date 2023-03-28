const API_URL = 'https://wttr.in/'

export function getWeather() {
    return (
        fetch(API_URL + 'Detroit?format=j1')
        .then((response) => response.json())
        .catch((e) => console.log(e))
    )
}
