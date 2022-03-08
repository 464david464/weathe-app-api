function clock() {
  let d = new Date();
  let hh = d.getHours();
  let mm = d.getMinutes();
  document.querySelector('.date').innerText = hh + ':' + mm

setInterval(() => {
  mm++
  if(mm > 59) {
    mm = 0
    hh++
  }
  if(mm < 10) {
    mm = '0' + mm
  }


  if(hh > 24) {
    hh = 0
  }
  document.querySelector('.date').innerText = hh + ':' + mm
}, 60000);
}
clock()

let input = document.querySelector("input");

function search() {
  let myHeaders = new Headers();

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
      "&lang=he&units=metric&appid=9ac9607796efff4f0762a85bc43efa57",

    requestOptions
  )
    .then((response) => response.json())
    .then((result) =>
      getWeatherDetails(
        result.main.temp,
        result.name,
        result.weather[0].icon,
        result.weather[0].description,
        result.main.feels_like,
        result.main.temp_min,
        result.main.temp_max
      )
    )
    .catch((error) => console.log("error", error));

  function getWeatherDetails(
    temp,
    city,
    icon,
    escription,
    feelsLike,
    fromtemp,
    totemp
  ) {
    let ststusImg = document.querySelector("img");
    let statusOfWeather = document.querySelector(".p-status");
    let area = document.querySelector(".area");
    let deg = document.querySelector(".deg");
    let about = document.querySelector(".feel-like");
    let aboutText = document.querySelector(".feel-like-text");
    let from = document.querySelector(".from");
    let to = document.querySelector(".to");
    deg.innerText = parseInt(temp) + "°";
    area.innerText = city;
    ststusImg.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
    statusOfWeather.innerText = escription;
    about.innerText = parseInt(feelsLike) + "°";
    aboutText.innerText = "מרגיש כמו";
    from.innerText = parseInt(fromtemp) + "° /";
    to.innerText = parseInt(totemp) + "°";
  }

  console.log(input.value);
}

document.querySelector("button").addEventListener("click", () => {
  if (input.value != "") {
    document.querySelector(".with-search").style.display = "flex";
    document.querySelector(".without-search").style.display = "none";
    search();
    input.value = "";
  }
});

document.addEventListener("keypress", (event) => {
  if (event.key == "Enter") {
    if (input.value != "") {
      document.querySelector(".with-search").style.display = "flex";
      document.querySelector(".without-search").style.display = "none";
      search();
      input.value = "";
    }
  }
});
