let inputValue = document.querySelector(".inputValue");
let button = document.querySelector(".button");
let name = document.querySelector(".name");
let desc = document.querySelector(".desc");
let temp = document.querySelector(".temp");

button.addEventListener("click", function () {
  fetch(
    "http://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=776b5f74a12c3ed83ad3d7e56c28e90a"
  )
    .then((response) => response.json())
    .then((data) => {
      let nameValue = data["name"];
      let tempValue = data["main"]["temp"];
      let descValue = data["weather"][0]["description"];
      console.log(nameValue);
      console.log(tempValue);
      console.log(descValue);
      name.innerHTML = nameValue;
      temp.innerHTML = tempValue - 273.15;
      desc.innerHTML = descValue;
    })

    .catch((err) => alert("Wrong City!"));
});
