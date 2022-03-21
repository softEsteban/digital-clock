// let date = new Date().toLocaleDateString();
// console.log(date);
// let date1 = new Date().toDateString();
// console.log(date1);
// let time = new Date().toTimeString();
// console.log(time);
// let time2 = new Date().toLocaleTimeString();
// console.log(time2);

function getCityTime(continent, city) {
  axios
    .get(`http://worldtimeapi.org/api/timezone/${continent}/${city}`)
    .then((res) => {
      let dateObj = res.data;
      let dateTime = dateObj.datetime;
      //2022-03-21T13:42:13.826454+09:00 format
      // console.log(dateObj);
      // console.log(dateTime);
      let slice = dateTime.slice(11, 19)
      // console.log(slice)
      return slice;

    })
    .catch((err) => {
      return console.log(err);
    });
    
}

function initClocks()
{
  //Local clock
  setInterval(() => {
    document.getElementById("my-time-span").innerHTML =
      " " + new Date().toLocaleTimeString() + " ";
  }, 1000);

  //Tokyo Clock
  // let timeT = getCityTime("Asia", "Tokyo")
  // setTimeout(() => {
  //   console.log(timeT)
  //   document.getElementById("japan-time-span").innerHTML =
  //      " " + timeT  + " ";
  // }, 5000);

}

//Start
getDateInDom = () => {
  document.getElementById("my-date-span").innerHTML = new Date().toDateString();
};
getDateInDom();
initClocks();
