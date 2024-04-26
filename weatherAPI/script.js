let test = []
const city = document.getElementById('city')
const trigger = document.getElementById('trigger')
let cityValue = ''
const temp = document.getElementById('temp')
const feels = document.getElementById('feelsLike')
const wind = document.getElementById('wind')
const humidity = document.getElementById('humidity')
const condition = document.getElementById('condition')
const locationName = document.getElementById('location')
trigger.onclick = function () {
    cityValue = city.value
    console.log(cityValue)

    fetch(`https://api.weatherapi.com/v1/current.json?key=ee13bdcd9cda438b826115121242604&q=${cityValue}&aqi=no`)
        .then((res) => res.json())
        .then((data) => {
            test = data
            console.log(test)
            locationName.innerHTML =`City: ${test.location.name}, ${test.location.region}`
            temp.innerHTML = `Temp-C: ${test.current.temp_c}C`
            feels.innerHTML = `Feels like: ${test.current.feelslike_c}C`
            wind.innerHTML = `Wind kp/h: ${test.current.gust_kph}C`
            humidity.innerHTML = `humidity: ${test.current.gust_kph}%`
            condition.innerHTML = `Condition: ${test.current.condition.text}.`
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
        });
}