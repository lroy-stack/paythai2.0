import React from "react";
import { Box, Typography, TextField, Button, InputAdornment, useTheme, useMediaQuery } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";

const SignupSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(12, "At least 12 characters")
    .matches(/[A-Z]/, "At least one uppercase letter")
    .matches(/[a-z]/, "At least one lowercase letter")
    .matches(/\d/, "At least one number")
    .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/, "At least one symbol (!@#$%^&*)")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

const Signup = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate(); // Hook para navegación

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      bgcolor="#f3f4f6"
      px={2}
    >
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"}
        width="100%"
        maxWidth="700px"
        bgcolor="white"
        borderRadius={4}
        boxShadow={3}
        overflow="hidden"
      >
        {!isMobile && (
          <Box flex={1} bgcolor="#EAF4FF" p={3} textAlign="center">
            <Typography variant="h5" fontWeight="bold" color="#007BFF" mb={2}>
              Welcome to PayThai
            </Typography>
            <Typography variant="body2" color="#6B7280" mb={3}>
              Manage your cryptocurrency payments easily and securely.
            </Typography>
            <Box
              component="img"
              src="https://www.gifss.com/economia/bitcoin/images/bitcoin-06.gif"
              alt="Bitcoin animation"
              sx={{ width: "100%", maxHeight: "200px", objectFit: "contain" }}
            />
          </Box>
        )}

        <Box flex={1.5} p={4}>
          <Typography
            variant="h4"
            fontWeight="bold"
            textAlign="center"
            color="#007BFF"
            mb={3}
          >
            Sign Up
          </Typography>
          <Formik
            initialValues={{ email: "", password: "", confirmPassword: "" }}
            validationSchema={SignupSchema}
            onSubmit={(values) => console.log(values)}
          >
            {({ errors, touched, handleChange, values }) => (
              <Form>
                <Field
                  as={TextField}
                  label="Email"
                  name="email"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  label="Password"
                  name="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  onChange={handleChange}
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                />
                <Field
                  as={TextField}
                  label="Confirm Password"
                  name="confirmPassword"
                  type="password"
                  fullWidth
                  margin="normal"
                  InputLabelProps={{ shrink: true }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockIcon />
                      </InputAdornment>
                    ),
                  }}
                  error={touched.confirmPassword && Boolean(errors.confirmPassword)}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                />
                <Box mt={2}>
                  <ReCAPTCHA sitekey="6LdguIYqAAAAAMXgzsrEcP07aDusNqnO_FLnHtwc" />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 3,
                    bgcolor: "#FFD700",
                    color: "#003366",
                    "&:hover": { bgcolor: "#FFC107" },
                  }}
                >
                  Sign Up
                </Button>
                <Typography
  variant="body2"
  textAlign="center"
  mt={2}
  sx={{ fontWeight: "bold" }}
>
  Already have an account?{" "}
  <Typography
    component="span"
    color="#007BFF"
    sx={{ cursor: "pointer", fontWeight: "bold" }}
    onClick={() => navigate("/login")} // Navegar a Login
  >
    Log in
  </Typography>
</Typography>

              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Signup;
