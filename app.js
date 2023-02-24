let apikey = "e58c42caa1f24325809135554231402"


let searchbutton = document.querySelector(".search")
let searchtext = document.querySelector("#searchtext")
let celsius = document.querySelector(".temp")
let status1 = document.querySelector(".status")
let windspeed = document.querySelector("#speed")
let humidity = document.querySelector("#humiditynum")
async function getweather(searchval) {
    let getdata = fetch(`http://api.weatherapi.com/v1/current.json?key=e58c42caa1f24325809135554231402&q=${searchval}&aqi=no`)
    let get = await getdata
    let data = await get.json()

    if ("error" in data) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".display").setAttribute("src", "images\\pngegg (1).png")
        celsius.innerHTML = `!`
        status1.textContent = `!`
        windspeed.textContent = `Windspeed !`
        humidity.textContent = `Humidity !`
    }
    else {
        document.querySelector(".error").style.display = "none"
        celsius.innerHTML = `${data.current.temp_c} &#8451 `
        status1.textContent = `${data.current.condition.text}`
        windspeed.textContent = `Windspeed ${data.current.wind_kph}Kmph`
        humidity.textContent = `Humidity ${data.current.humidity}%`
    }
}

searchbutton.addEventListener("click", () => {
    let city = searchtext.value
    getweather(city)
})
document.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        let city = searchtext.value
        getweather(city)
    }
});
  
