const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name');
const cityname = document.getElementById('cityname');
const temprature = document.getElementById('temprature');
const Weathericons = document.getElementById('Weathericons');

var getInfo = async (event) => {
    event.preventDefault()
    const inputValue = cityname.value
    
    if (inputValue == '') {
        city_name.innerHTML=`you must have to write something`}
    
    else{
        try {
        const response =  await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=a37654e1f69d65ad07e7506eedb68122`)
        const getData =  await response.json();
        const canvertedToArray = [getData]
        city_name.innerHTML=`${canvertedToArray[0].sys.country}, ${canvertedToArray[0].name}`
        temprature.innerHTML = `${canvertedToArray[0].main.temp} <sup>o</sup>C`;
        const RenderWeathericons = canvertedToArray[0].weather[0].main
           
        if(RenderWeathericons=='Clouds'){
            Weathericons.innerHTML=` <strong id="icon"style="color:blue">☁☁</strong>` 
        }
        else if(RenderWeathericons=='Clear'){
            Weathericons.innerHTML=`<strong id="icon">🌞</strong>`
        }
        else if(RenderWeathericons=='Rain'){
            Weathericons.innerHTML=`<strong id="icon">🌧🌧</strong>`
        }
        else{
            Weathericons.innerHTML=`<strong id="icon">🏖🏖</strong>`
        }
    }
        catch (error) {
            city_name.innerHTML=`<p style="color:red">invelid city name 🕵️ </p>`
        };
    };
    city_name.target.value="" 
};

submitBtn.addEventListener('click',getInfo);