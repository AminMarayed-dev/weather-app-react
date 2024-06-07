import CardItem from "../card-item/CardItem";
import { Grid } from "@mui/material";

function CardWrapper({recentSearch}) {
  return (
    <Grid
      container
      columns={{ xs: 1, sm: 1, md: 5 }}
      spacing={2}
      sx={{
        mt: 3,
      }}
    >
      {recentSearch.length > 0
        ? recentSearch.map((item) => (
            <Grid item xs={1} sm={1} md={1}>
              <CardItem item={item} />
            </Grid>
          ))
        : ""}
    </Grid>
  );
}

export default CardWrapper;
