import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';


export default function SearchBox({updateInfo}){
    let [city,setCity] = useState("");
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "e02b949712726e4457d760ad1268c2c2";
    

    let weatherInfo = async()=>{
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let JsonRes = await response.json();
      let result = {
        temp: JsonRes.main.temp,
        tempMin: JsonRes.main.temp_min,
        tempMax: JsonRes.main.temp_max,
        humidity: JsonRes.main.humidity,
        weather: JsonRes.weather[0].description,
      }
      console.log(JsonRes);
      return result;
    }
    
    let handleChange = (event)=>{
        setCity(event.target.value);
    }
    let handleSubmit = async (event)=>{
        event.preventDefault();
        setCity("");
        let result = await weatherInfo();
        updateInfo(result);
    }
    return(
        <div className='SearchBox'>
            <h3>Search for Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField required id="city" label="City Name" variant="outlined"  InputProps={{
        style: { color: 'white'} // Change 'red' to the desired color
      }}
      sx={{
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'white', // Change 'red' to the desired color
          },
        },
      }} value={city} onChange={handleChange}/>
                <br /><br />
                
                <Button variant="contained" type='submit'>Search</Button>
            </form>
            
        </div>
    )
}