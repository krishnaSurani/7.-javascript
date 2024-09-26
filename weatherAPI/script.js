
weather();

document.getElementById("search").addEventListener("click",weather)

function weather()
{
    let city = document.getElementById("data").value;

    let city_name = "";

    if(city == "")
    {
        city_name = "delhi";
    }
    else{
        city_name = city;
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=189066c0717f349dadbd2c885d3a196d&units=metric`)
    .then((res)=>{
        return res.json();
    })
    .then((res)=>{
        console.log(res);
        


        document.querySelector(".data1").innerHTML=
        `
         <img src="https://openweathermap.org/img/wn/${res.weather[0].icon}@2x.png" alt="" class="weather-icon" >
        <h1 class="temp">${res.main.temp}<sup>°C</sup></h1>
         <p class="city">${res.name}</p>
         <p class="wd">${res.weather[0].main}</p>
         <div class="detail">
            <div class="col">
                <img src="images/humidity.png" alt="">
                <div class="ab">
                <h4 class="humidity">${res.main.humidity} %</h4>
                <p>Humidity</p>
                </div>
            </div>
            <div class="col1">
                <img src="images/wind.png" alt="">
                <div class="ab">
                <h4 class="wind">${res.wind.speed} km/h</h4>
                <p>Wind speed</p>
                </div>
            </div>
         </div>   
        
        
        `
    })
    .catch((err)=>{
        console.log(err);
    })

}