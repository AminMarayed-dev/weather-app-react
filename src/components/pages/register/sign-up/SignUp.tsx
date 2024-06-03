import {
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import FacebookIcon from "@mui/icons-material/Facebook";

function SignUp({ handleParam }: { handleParam: ({mode}: {mode:string}) => void }) {
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
        صفحه ثبت نام
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          fullWidth
          id="email"
          placeholder="ایمیل"
          name="email"
          autoComplete="email"
          autoFocus
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
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
          ثبت نام
        </Button>
        <Grid container>
          <Grid item>
            <Button onClick={() => handleParam({ mode: "SignIn" })}>
              ورود
            </Button>
          </Grid>
        </Grid>
        <Typography sx={{ textAlign: "center", mt: 3, mb: 2 }}>
          ثبت نام از طریق روش های دیگر
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Avatar sx={{ cursor: "pointer" }}>
            <GoogleIcon />
          </Avatar>
          <Avatar sx={{ cursor: "pointer" }}>
            <XIcon />
          </Avatar>
          <Avatar sx={{ cursor: "pointer" }}>
            <FacebookIcon />
          </Avatar>
        </Stack>
      </Box>
    </Box>
  );
}

export default SignUp;
