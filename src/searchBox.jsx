import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import "./searchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}){
  
    let [city,setCity]=useState("");
    let[error,setError]=useState(false)
   const API_URL="https://api.openweathermap.org/data/2.5/weather";
   const API_KEY="f0fd59979c3305899d1954f26bbbd769";
  

   let getWeather=async ()=>{
    try{
     let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}`);
     let jsonResponse =await response.json();
     let result ={
        city:city,
        temp: jsonResponse.main.temp,
        tempMin :  jsonResponse.main.temp_min,
        tempMax : jsonResponse.main.temp_max,
        humidity:  jsonResponse.main.humidity,
        feelsLike:  jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
     }
     console.log(result)
     return result;
    }catch(err){
     throw err;
    }
   }

    let handleChange=(event)=>{
        setCity(event.target.value);
    }

    let handleSubmit=async (event)=>{
        try{
        event.preventDefault();
        console.log(city)
        setCity("");
        let newInfo=await getWeather();
    //     updateInfo(newInfo);
        }catch(err){
            setError(true)
        }
    }
    return(
        <div className='search'>
             <form onClick={handleSubmit}>
                
                <TextField id='city' label='City name' variant='outlined' value={city} onChange={handleChange} required/>
                <br/>
                <br/>
                <Button variant='contained' type='submit'>Search</Button>
                {error && <p>No such place exist</p> }
             </form>
             
        </div>
    )
}