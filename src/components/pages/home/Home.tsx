import {
  Alert,
  Box,
  Button,
  Container,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import CardSearch from "./card-search/CardSearch";
import CardWrapper from "./card-wrapper/CardWrapper";
import { useState } from "react";
import { getWeatherData } from "../../../api/weather.api";
import { useNavigate } from "react-router-dom";

function Home() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const [open, setOpen] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  let recentSearchList =
    JSON.parse(localStorage.getItem("recent-search")) || [];

  const handleSearch = () => {
    if (!cityName) {
      setIsError(true);
      setErrorMessage("City name cannot be empty");
      return;
    }

    const alreadySearched = recentSearchList.some(
      (search) => search.name.toLowerCase() === cityName.toLowerCase()
    );

    if (alreadySearched) {
      setIsError(true);
      setErrorMessage("City has already been searched for");
      return;
    }

    setIsError(false);
    getWeatherData({ city: cityName })
      .then((data) => {
        setWeatherData(data);
        if (recentSearchList.length >= 5) recentSearchList.shift();
        recentSearchList.push(data);
        localStorage.setItem("recent-search", JSON.stringify(recentSearchList));
      })
      .catch((error) => {
        console.log(error);
        setOpen(true);
      });
    setCityName("");
  };

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const handleLogOut = () => {
    navigate("/register");
  };

  return (
    <Grid
      sx={{
        backgroundImage: "url(../src/assets/weather.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <Container>
        <Box component="header">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "white", mr: 3, fontSize: "2rem" }}>
              Weather App
            </Typography>
            <Button
              variant="contained"
              endIcon={<LogoutIcon />}
              onClick={handleLogOut}
            >
              LogOut
            </Button>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              margin="normal"
              fullWidth
              name="search-box"
              placeholder="please enter your city"
              size="small"
              sx={{ bgcolor: "white", mt: 1 }}
              value={cityName}
              error={isError}
              helperText={isError ? errorMessage : ""}
              onChange={(e) => setCityName(e.target.value)}
            />
            <Button variant="contained" size="large" onClick={handleSearch}>
              Search
            </Button>
          </Box>
        </Box>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="error"
            variant="filled"
            sx={{ width: "100%" }}
          >
            The desired city was not found
          </Alert>
        </Snackbar>
        <CardSearch weather={weatherData} />
        <CardWrapper recentSearch={recentSearchList} />
      </Container>
    </Grid>
  );
}

export default Home;
