let myHeaders = new Headers();

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Mevo+Betar&lang=he&units=metric&appid=9ac9607796efff4f0762a85bc43efa57",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => getWeatherDetails(parseInt(result.main.temp) + '°', result.name, result.weather[0].icon, result.weather[0].description))
    .catch((error) => console.log("error", error));

    function getWeatherDetails(temp, city, icon, escription) {
        let ststusImg = document.querySelector('img');
        let statusOfWeather = document.querySelector('.p-status');
        let area = document.querySelector('.area');
        let deg = document.querySelector('.deg');
        let about = document.querySelector('.feel-like');

        deg.innerText = temp;
        area.innerText = city
        if(area.textContent == 'מבוא ניתר') {
            area.innerText = 'מבוא ביתר'
        }
        ststusImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
        statusOfWeather.innerText = escription;
    }

    
        let myListHeaders = new Headers();

  let requestOptionsList = {
    method: "GET",
    headers: myListHeaders,
    redirect: "follow",
  };

fetch(
    "../json/city.list.json",
    requestOptionsList
  )
    .then((response) => response.json())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));

    function sityList(nameOfTheCity) {    
}