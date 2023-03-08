
window.addEventListener('load', Mexico);

function Mexico() {
  var city = "mexico"; //set the city to Casablanca

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9fd7a449d055dba26a982a3220f32aa2`)
  .then((response) => response.json())
  .then((data) => {
      console.log(data);

      var celcius = (data.main.temp - 273.15).toFixed(1);
      console.log("City temperature:" + celcius + "celcius")

      console.log("City wind speed:" + data.wind.speed)

      var timezoneOffset = data.timezone +(16 * 60 * 60);
      var currentTime = new Date(Date.now() + (timezoneOffset * 1000));
      var time = currentTime.toLocaleTimeString();

      document.getElementById("time").innerHTML = `Current Time: ${time}`;
      document.getElementById("temperture").innerHTML = `Temperature (C): ${celcius}`; 
      document.getElementById("humidity").innerHTML = `Humidity: ${data.main.humidity}%`; 
      document.getElementById("windspeed").innerHTML = `Wind Speed: ${data.wind.speed}km/h`;
      document.getElementById("wether").innerHTML = `Weather: ${data.weather[0].main}`; 
  })
}


  


