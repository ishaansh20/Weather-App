import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
  let [city, setCity] = useState("");
  let [error,setError]=useState(false);

  const Api_url = "https://api.openweathermap.org/data/2.5/weather";
  const Api_key = "7bfd54137f0aa973b3c7f0e5d73cf95f";

  let handleWeather = async () => {
    try{
        let response = await fetch(
      `${Api_url}?q=${city}&appid=${Api_key}&units=metric`
    );
    let jsonResponse = await response.json();
    let result={
        city:city,
        temp:jsonResponse.main.temp,
        tempMax:jsonResponse.main.temp_max,
        tempMin:jsonResponse.main.temp_min,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description,
    };
    console.log(result);
    return result;
    }catch(err){
        throw err;
    }
    
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
    event.preventDefault();
    console.log(city);
    setCity("");
    let newInfo=await handleWeather();
    updateInfo(newInfo);
    }catch(err){
        setError(true); 
    }
    
  };

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="filled"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p>No information of such place</p>}
      </form>
    </div>
  );
}
