import InfoBox from "./InfoBox"
import SearchBox from "./SearchBox"
import { useState } from "react"

export default function WeatherApp(){
    let [weatherInfo,setWeatherInfo] = useState(
        {
            city:"Delhi",
            temp: 24.84,
            tempMin: 23.5,
            tempMax: 25.05,
            humidity: 47,
            weather: "haze",
        }
    );
    let updateInfo = async(result)=>{
        setWeatherInfo(result);
    }
    return(
        <div>
            <SearchBox updateInfo={updateInfo}/>
            <br /><br />
            <InfoBox weatherInfo={weatherInfo}/>
        </div>
    )
}