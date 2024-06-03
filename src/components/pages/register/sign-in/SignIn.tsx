import { Box, Button, Grid, InputAdornment, TextField, Typography } from "@mui/material"
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function SignIn({ handleParam }: { handleParam: ({mode}: {mode:string}) => void }) {
  return (
    <Box
    sx={{
      my: 8,
      mx: 4,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <Typography component="h1" variant="h3">
      صفحه ورود
    </Typography>
    <Box component="form" noValidate sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        fullWidth
        id="username"
        placeholder="نام کاربری"
        name="username"
        autoComplete="email"
        autoFocus
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <TextField
        margin="normal"
        fullWidth
        name="password"
        type="password"
        id="password"
        placeholder="رمز عبور"
        autoComplete="current-password"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        ورود
      </Button>
      <Grid container>
        <Grid item>
          <Button onClick={() => handleParam({ mode: "SignUp" })}>
            ثبت نام
          </Button>
        </Grid>
      </Grid>
    </Box>
  </Box>
  )
}

export default SignIn