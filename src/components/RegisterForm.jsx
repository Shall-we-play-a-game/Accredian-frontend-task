import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "../assets/Image.jpg";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/register", data)
      .then((res) => {
        console.log("Registerd Successfully", res.data);
        navigate("/login");
      })
      .catch((error) => {
        console.log("Login Failed", error);
      });
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Box
          component='form'
          onSubmit={handleSubmit(onSubmit)}
          sx={{
            maxWidth: "500px",
            margin: "auto",
            padding: "50px",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            backgroundColor: "white",
          }}
        >
          <Typography
            variant='h5'
            component='div'
            sx={{ mb: 2, textAlign: "center", fontWeight: "bold" }}
          >
            Registration Form
          </Typography>

          <TextField
            fullWidth
            label='Full Name'
            {...register("fullName", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
            error={Boolean(errors.fullName)}
            helperText={errors.fullName?.message}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Username'
            {...register("username", {
              required: "Username is required",
              minLength: {
                value: 3,
                message: "Username must be at least 3 characters",
              },
            })}
            error={Boolean(errors.username)}
            helperText={errors.username?.message}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Email'
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i,
                message: "Email must contain @ and .com",
              },
            })}
            error={Boolean(errors.email)}
            helperText={errors.email?.message}
            margin='normal'
          />
          <TextField
            fullWidth
            type='password'
            label='Password'
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={Boolean(errors.password)}
            helperText={errors.password?.message}
            margin='normal'
            sx={{ mt: 2 }}
          />
          <TextField
            fullWidth
            label='Gender (M/F)'
            {...register("gender", {
              required: "Gender is required",
              pattern: {
                value: /^[MF]$/i,
                message: "Please enter 'M' or 'F'",
              },
            })}
            error={Boolean(errors.gender)}
            helperText={errors.gender?.message}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Age'
            {...register("age", {
              required: "Age is required",
              pattern: {
                value: /^(0?[1-9]|[1-9][0-9])$/,
                message: "Please enter a valid age (1-99)",
              },
            })}
            error={Boolean(errors.age)}
            helperText={errors.age?.message}
            margin='normal'
          />
          <Button
            type='submit'
            variant='contained'
            color='primary'
            fullWidth
            sx={{ mt: 2 }}
          >
            Register
          </Button>
          <Box sx={{ mt: 2, textAlign: "center" }}>
            <Box mt={1}>
              <Link href='/login' variant='body2'>
                Already have an Account !! Login
              </Link>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ flex: "1", textAlign: "center" }}>
        <img
          src={Image}
          alt='Your Image'
          style={{ maxWidth: "100%", height: "100vh" }}
        />
      </Box>
    </Box>
  );
};

export default RegisterForm;
