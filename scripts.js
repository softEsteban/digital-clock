function getCityTime(continent, city) {
  setInterval(() => {
    axios
      .get(`http://worldtimeapi.org/api/timezone/${continent}/${city}`)
      .then((res) => {
        let dateObj = res.data;
        let dateTime = dateObj.datetime;
        let slice = dateTime.slice(11, 19);

        switch (city) {
          case "Tokyo":
            document.getElementById("japan-time-span").innerHTML =
              " " + slice + " ";
            console.log(slice);
            break;

          case "Buenos_Aires":
            document.getElementById("arg-time-span").innerHTML =
              " " + slice + " ";
            console.log(slice);
            break;

          case "Berlin":
            document.getElementById("ger-time-span").innerHTML =
              " " + slice + " ";
            console.log(slice);
            break;

          case "Bogota":
            document.getElementById("col-time-span").innerHTML =
              " " + slice + " ";
            console.log(slice);
            break;

          default:
            break;
        }
      })
      .catch((err) => {
        return console.log(err);
      });
  }, 1000);
}

function initClocks() {
  //Local clock
  setInterval(() => {
    document.getElementById("my-time-span").innerHTML =
      " " + new Date().toLocaleTimeString() + " ";
  }, 1000);

  //Local date
  getDateInDom = () => {
    document.getElementById("my-date-span").innerHTML =
      new Date().toDateString();
  };

  //Tokyo Clock
  getCityTime("Asia", "Tokyo");

  //Buenos Aires Clock
  getCityTime("America/Argentina", "Buenos_Aires");

  //Buenos Aires Clock
  getCityTime("Europe", "Berlin");

  //Bogota Clock
  getCityTime("America", "Bogota");
}

initClocks();

