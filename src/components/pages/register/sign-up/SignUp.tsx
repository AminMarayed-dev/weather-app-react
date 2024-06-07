import {
  Alert,
  Avatar,
  Box,
  Button,
  Grid,
  InputAdornment,
  Snackbar,
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
import { useState } from "react";
import { useForm } from "react-hook-form";
import { postUser } from "../../../../api/user.api";
import { yupResolver } from "@hookform/resolvers/yup";
import {  RegisterSchemaSignUP } from "../validation/Registerschema";

function SignUp({
  handleParam,
}: {
  handleParam: ({ mode }: { mode: string }) => void;
}) {
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(RegisterSchemaSignUP),
  });

  const onSumbitSignUp = (data) => {
    postUser(data);
    setOpen(true);
  };
  console.log(errors);

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
        Sign UP Page
      </Typography>
      <Box
        component="form"
        sx={{ mt: 1 }}
        onSubmit={handleSubmit(onSumbitSignUp)}
      >
        <TextField
          {...register("email")}
          margin="normal"
          fullWidth
          placeholder="email"
          autoFocus
          helperText={errors.email?.message}
          error={!!errors.email}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          {...register("username")}
          margin="normal"
          fullWidth
          helperText={errors.username?.message}
          error={!!errors.username}
          placeholder="username"
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
          {...register("password")}
          margin="normal"
          fullWidth
          helperText={errors.password?.message}
          error={!!errors.password}
          type="password"
          placeholder="password"
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
          Sign Up
        </Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Sign Up is successfully
          </Alert>
        </Snackbar>
        <Grid container>
          <Grid item>
            <Button onClick={() => handleParam({ mode: "SignIn" })}>
              Sign IN
            </Button>
          </Grid>
        </Grid>
        <Typography sx={{ textAlign: "center", mt: 3, mb: 2 }}>
          Sign Up with another way
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
