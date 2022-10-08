// javascript code to fetch users location
const findmylocation = () =>{
    const status = document.querySelector("#location_name")

    const success = (position) => {
        console.log(position)
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const geolocation = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
        fetch(geolocation)
        .then(res => res.json())
        .then(data=>{
            status.textContent = "Device location: "+data.city +"," + data.principalSubdivision 
        })
    }
    const error = () =>{

         alert("unable to find location \n Allow to get your location")

}
    navigator.geolocation.getCurrentPosition(success,error);
}
document.querySelector("#search").addEventListener("search",findmylocation);
const API_KEY = `c5cd71c3d619dcaceb71e0ab4492a964`;
const search = document.querySelector("#search");
const main = document.querySelector("#main");
const weatherforecast = document.querySelector("#weatherforecast")
const fdate = new Date()
const date = fdate.getDate()
const month = fdate.getMonth()
const year= fdate.getFullYear()
const day = fdate.getDay()
const hours = fdate.getHours()
const minutes = fdate.getMinutes()
var am_pm

// CODE TO PRINT TIME
if(hours>=0 && hours<=12){
    am_pm = 'AM'
}
else{
    am_pm = 'PM'

}

// CODE TO PRINT DAYS
var weekdays = new Array(7);
var i

if(day==0){
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
}
if(day==1){
    weekdays[7] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
}
if(day==2){
    weekdays[7] = "Sunday";
    weekdays[8] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
}
if(day==3){
    weekdays[7] = "Sunday";
    weekdays[8] = "Monday";
    weekdays[9] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
}
if(day==4){
    weekdays[7] = "Sunday";
    weekdays[8] = "Monday";
    weekdays[9] = "Tuesday";
    weekdays[10] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
}
if(day==5){
    weekdays[7] = "Sunday";
    weekdays[8] = "Monday";
    weekdays[9] = "Tuesday";
    weekdays[10] = "Wednesday";
    weekdays[11] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
}
if(day==6){
    weekdays[7] = "Sunday";
    weekdays[8] = "Monday";
    weekdays[9] = "Tuesday";
    weekdays[10] = "Wednesday";
    weekdays[11] = "Thursday";
    weekdays[12] = "Friday";
    weekdays[6] = "Saturday";
}
// funciton to get current day data
const getTodayweather = async(city) =>{
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${API_KEY}&units=metric`
    const response = await fetch(url);
    
    const data =  await response.json();
    console.log(data)
    return showTodayweather(data);
        
}
const showTodayweather = (data) =>{
    main.innerHTML=`
    <main id="main">
      <!-- search bar -->
      <div class="row1">
         <input type="search" class="search" id="search" placeholder="Enter location">
         
      </div>
      <!-- weather data for current day -->
      <div class="row2" id="today">
         <div class="day_name" id="today_name">${search.value}</div>
         <div class="image"><img src="  http://openweathermap.org/img/wn/10d@2x.png" height="40px" alt=""></div>
         <div class="text">
            <h1> ${data.list[0].main.temp}&#8451 </h1>
            <span id="windspeed">Windspeed: ${data.list[0].wind.speed}km/h</span><br>
            <span id="humidity">Humidity:${data.list[0].main.humidity}%</span><br>
            <span id="date">Date:${date}/${month + 1}/${year}</span> <br>
            <span id="time">${hours}:${minutes} ${am_pm}</span>
         </div>
   </main>
   `

   weatherforecast.innerHTML =`
   <div class="weatherforecast" id ='weatherforecast'>
      <!-- day1 -->
      <div class="week" id="day1">
         <div class="day_name" id="day">${weekdays[day]}</div>
         <div class="image"><img src=" http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png"  alt=""></div>
         <div class="text">
            <h3 id="tempreture">MIN: ${data.list[0].main.temp_min}&#8451</h3>
            <h3 id="tempreture">MAX: ${data.list[0].main.temp_max}&#8451</h3>
           
         </div>
        
      </div>
      <!-- day2 -->
      <div class="week" id="day2">
         <div class="day_name">${weekdays[day +1]}</div>
         <div class="image"><img src=" http://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png"  alt=""></div>
         <div class="text">
            <h3 id="tempreture">MIN: ${data.list[1].main.temp_min}&#8451</h3>
            <h3 id="tempreture">MAX: ${data.list[1].main.temp_max}&#8451</h3>
           
         </div>
        
      </div>
      <!-- day3 -->
      <div class="week" id="day3">
         <div class="day_name">${weekdays[day + 2]}</div>
         <div class="image"><img src=" http://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png"  alt=""></div>
         <div class="text">
            <h3 id="tempreture">MIN: ${data.list[2].main.temp_min}&#8451</h3>
            <h3 id="tempreture">MAX: ${data.list[2].main.temp_max}&#8451</h3>
            
         </div>
        
      </div>
      <!-- day4 -->
      <div class="week" id="day4">
         <div class="day_name">${weekdays[day + 3]}</div>
         <div class="image"><img src=" http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png"  alt=""></div>
         <div class="text">
            <h3 id="tempreture">MIN: ${data.list[3].main.temp_min}&#8451</h3>
            <h3 id="tempreture">MAX: ${data.list[3].main.temp_max}&#8451</h3>
           
         </div>
       
      </div>
      <!-- day5 -->
      <div class="week" id="day5">
         <div class="day_name">${weekdays[day + 4]}</div>
         <div class="image"><img src=" http://openweathermap.org/img/wn/${data.list[4].weather[0].icon}@2x.png"  alt=""></div>
         <div class="text">
            <h3 id="tempreture">MIN: ${data.list[4].main.temp_min}&#8451</h3>
            <h3 id="tempreture">MAX: ${data.list[4].main.temp_max}&#8451</h3>
         
         </div>
       
      </div>
      <!-- day6 -->
      <div class="week" id="day6">
         <div class="day_name">${weekdays[day + 5]}</div>
         <div class="image"><img src=" http://openweathermap.org/img/wn/${data.list[5].weather[0].icon}@2x.png"  alt=""></div>
         <div class="text">
            <h3 id="tempreture">MIN: ${data.list[5].main.temp_min}&#8451</h3>
            <h3 id="tempreture">MAX: ${data.list[5].main.temp_max}&#8451</h3>
            
         </div>
       
      </div>
      <!-- day7 -->
      <div class="week" id="day7">
         <div class="day_name">${weekdays[day + 6]}</div>
         <div class="image"><img src=" http://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png" alt=""></div>
         <div class="text">
            <h3 id="tempreture">MIN: ${data.list[6].main.temp_min}&#8451</h3>
            <h3 id="tempreture">MAX: ${data.list[6].main.temp_max}&#8451</h3>
           
         </div> 
      </div>
   </div>
  
   `
}

search.addEventListener(
    "search",
    function(event) {
        getTodayweather(search.value)
        event.preventDefault();

       
    }
)
