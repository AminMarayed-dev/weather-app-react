
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useSearchParams } from "react-router-dom";
import SignUp from "./sign-up/SignUp";
import SignIn from "./sign-in/SignIn";

function Register() {
  const [searchParams, setSerachParams] = useSearchParams();
  const mode = searchParams.get("mode") || "SignUp";
  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: "url(../src/assets/weather.jpg)",
          backgroundRepeat: "no-repeat",
          backgroundColor: (t) =>
            t.palette.mode === "light"
              ? t.palette.grey[50]
              : t.palette.grey[900],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {mode === "SignUp" ? (
          <SignUp handleParam={setSerachParams} />
        ) : (
          <SignIn handleParam={setSerachParams} />
        )}
      </Grid>
    </Grid>
  );
}

export default Register;
