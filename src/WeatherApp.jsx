import { useState } from "react";
import InfoCard from "./infoCard";
import SearchBox from "./searchBox";

export default function Weather(){
    const [weather,setWeather]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:23,
        tempMax:25.7,
        humidity:47,
        weather:"haze",
    })

    let updateInfo=(newInfo)=>{
        setWeather(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h1>Wheather App by Smita</h1>
            <SearchBox UpdateInfo={updateInfo}/>
            <InfoCard info={weather}/>
        </div>
    )
}