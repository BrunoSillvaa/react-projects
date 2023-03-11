const APIKey = '6e54f7785fbd45ba86b553bdad982625'

export function GeoApi () {
  fetch(`https://newsapi.org/v2/top-headlines?&category=technology&country=br&apiKey=${APIKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}