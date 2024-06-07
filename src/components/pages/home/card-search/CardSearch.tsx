import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CardSearch({ weather }) {

  return (
    <Card
      sx={{
        minWidth: 275,
        mt: 4,
        background: "linear-gradient(to right, #2a5298, #1e3c72)",
        WebkitBackground: "linear-gradient(to right, #2a5298, #1e3c72)",
        backgroundFallback: "#1e3c72",
        color: "white",
      }}
    >
      {weather ? (
        <CardContent>
          <Typography variant="h5" component="div" sx={{ mb: 4, mt: 3 }}>
          {weather.name}
          </Typography>
          <Typography
            component="div"
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Typography variant="body2">Country: {weather.sys.country}</Typography>
            <Typography variant="body2">Temperature: {(weather.main.temp - 273.15).toFixed(2)}°C </Typography>
            <Typography variant="body2">Feels Like: {weather.main.feels_like}</Typography>
            <Typography variant="body2">Description: {weather.weather[0].description}</Typography>
          </Typography>
        </CardContent>
      ) : (
        ""
      )}
    </Card>
  );
}

export default CardSearch;
