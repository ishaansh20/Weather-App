import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";

export default function WeatheraApp(){
    let [weatherInfo ,setWeatherInfo]=useState({
        city: "Delhi",
        feelsLike: 37.18,
        humidity: 48,
        temp: 33.73,
        tempMax: 33.73,
        tempMin: 33.73,
        weather: "broken clouds",
  });

  let updateInfo=(newInfo)=>{
    setWeatherInfo(newInfo);
  };


    return (
        <div style={{textAlign:"center"}}>
            <h2>WEATHER APP</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}