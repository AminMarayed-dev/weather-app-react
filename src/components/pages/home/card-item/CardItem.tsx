import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Card } from "@mui/material";

function CardItem({ item }) {
  return (
    <Card sx={{ minWidth: 200 }}>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ mb: 4, mt: 3 }}>
          {item.name}
        </Typography>
        <Typography
          component="div"
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Typography variant="body2">Country: {item.sys.country}</Typography>
          <Typography variant="body2">Feels Like: {item.main.feels_like}</Typography>
          <Typography variant="body2">Temperature: {item.main.temp}</Typography>
          <Typography variant="body2">Pressure: {item.main.pressure}</Typography>
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardItem;
