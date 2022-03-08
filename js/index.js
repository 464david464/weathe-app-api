
let input = document.querySelector('input');

function search() {

  let myHeaders = new Headers();

let requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
};

fetch(
  "https://api.openweathermap.org/data/2.5/weather?q=" + input.value + "&lang=he&units=metric&appid=9ac9607796efff4f0762a85bc43efa57",


  requestOptions
)
  .then((response) => response.json())
  .then((result) =>
    getWeatherDetails(
      parseInt(result.main.temp) + "°",
      result.name,
      result.weather[0].icon,
      result.weather[0].description,
      result.main.feels_like
    )
  )
  .catch((error) => console.log("error", error));

  function getWeatherDetails(temp, city, icon, escription, feelsLike) {
    let ststusImg = document.querySelector("img");
    let statusOfWeather = document.querySelector(".p-status");
    let area = document.querySelector(".area");
    let deg = document.querySelector(".deg");
    let about = document.querySelector(".feel-like");
    let aboutText = document.querySelector(".feel-like-text");
  
    deg.innerText = temp;
    area.innerText = city;
    ststusImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    statusOfWeather.innerText = escription;
    about.innerText = parseInt(feelsLike) + '°';
    aboutText.innerText = 'מרגיש כמו'
  
  }

  console.log(input.value)
}

document.querySelector('button').addEventListener('click', search)

document.addEventListener('keypress', (event) => {
  if(event.key == 'Enter') {
    search()
  }
})
