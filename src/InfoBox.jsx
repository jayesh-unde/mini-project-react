import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

export default function InfoBox({weatherInfo}){
    
    return(
        <div className="InfoBox">
            
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {weatherInfo.weather}
        </Typography>
        <Typography variant="h5" component="div">
          {weatherInfo.temp}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {weatherInfo.city}
        </Typography>
        <Typography variant="body2">
          Minimum Temperature: {weatherInfo.tempMin}
        </Typography>
        <Typography variant="body2">
          Maximum Temperature: {weatherInfo.tempMax}
        </Typography>
        <Typography variant="body2">
          Humidity: {weatherInfo.humidity}
        </Typography>
      </CardContent>
    </Card>
        </div>
    )
}