document.addEventListener("DOMContentLoaded",function(){
  let cityInput=document.getElementById("city-input");
  let getWeatherBtn=document.getElementById("get-weather-btn");
  let weatherInfo=document.getElementById("weather-info");
  let CityNameDisp=document.getElementById("city-name");
  let tempDisp =document.getElementById("temperature");
  let descDisp=document.getElementById("description");
  let errormessage=document.getElementById("errror-messag");
  let API_KEY="eaf9f3927520aa83adb0a3f496218bcf";

  getWeatherBtn.addEventListener('click',async function(e){
    let city=cityInput.value.trim()
    if(city.length<=0){return};

    try{
      let weatherData=await fetchWeatherData(city)
      displayWeatherData(weatherData);
      
    }
    catch(error){
      showError()
    }
    
  })
  
  async function fetchWeatherData(city){
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  
    const response=await fetch(url)
    console.log(typeof response)
    console.log(response)
    if(!response.ok){
      throw new Error("city not found")
    }
    const data=await response.json()
    return data

  }
  
  function displayWeatherData(data){
    console.log(data)
    const{name,main,weather}=data
    weatherInfo.classList.remove("hidden")
    CityNameDisp.textContent=name
    tempDisp.textContent= `Temperature : ${main.temp}`
    descDisp.textContent= `weather : ${weather[0].description}`

  
  }
  
  function showError(){
    
   errormessage.classList.add("hidden")
   errormessage.classList.remove("hidden")
  }
  
  
    
    
  
    
    
    












})