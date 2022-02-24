const forecastTable = document.querySelector('#weather-forecast')


fetch("https://api.weather.gov/gridpoints/MPX/116,72/forecast")
    .then(response=>response.json())
    .then(weatherdata=>{
         console.log(weatherdata)
         showForecastInTable(weatherdata)
    })

function showForecastInTable(weatherdata){
    console.log(weatherdata)

    let properties = weatherdata.properties
    let periods = properties.periods

    periods.forEach(forecast=>{
        let tableRow = document.createElement("tr")

        let tableDataCellDay = document.createElement("td")
        let tableDataTemp = document.createElement("td")
        let tableDataCellIcon = document.createElement("td")
        let weatherIconImg = document.createElement("img")
        let tableDataDetailed = document.createElement("td")
        
        let name = forecast.name
        let temp = forecast.temperature
        let tempUnit = forecast.temperatureUnit
        let icon = forecast.icon
        let detailedForecast = forecast.detailedForecast

        tableDataCellDay.innerHTML=name
        tableDataTemp.innerHTML=`${temp} ${tempUnit}`
        tableDataDetailed.innerHTML=detailedForecast
        
        tableRow.appendChild(tableDataCellDay)
        tableRow.appendChild(tableDataTemp)
        

        weatherIconImg.src = icon
        tableDataCellIcon.appendChild(weatherIconImg)
        tableRow.appendChild(tableDataCellIcon)
        tableRow.appendChild(tableDataDetailed)
        forecastTable.appendChild(tableRow)

    })
}

