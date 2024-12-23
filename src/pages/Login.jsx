import React from "react";
import { Box, Typography, TextField, Button, useMediaQuery, useTheme } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().required("Required"),
});

const Login = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Detectar pantallas pequeñas

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f3f4f6">
      <Box
        display="flex"
        flexDirection={isMobile ? "column" : "row"} // Cambiar a diseño vertical en móviles
        width="90%"
        maxWidth="800px"
        bgcolor="white"
        borderRadius={4}
        boxShadow={3}
        overflow="hidden"
      >
        {/* Columna izquierda: Información (visible solo en desktop) */}
        {!isMobile && (
          <Box flex={1} p={4} bgcolor="#EAF4FF" textAlign="center">
            <Typography variant="h5" fontWeight="bold" color="#007BFF" mb={2}>
              Welcome to PayThai
            </Typography>
            <Typography variant="body1" color="#6B7280" mb={4}>
              Seamlessly manage your cryptocurrency payments with a secure and modern platform.
            </Typography>
            <Box
              component="img"
              src="https://www.gifss.com/economia/bitcoin/images/bitcoin-06.gif"
              alt="Login animation"
              sx={{
                width: "100%",
                maxHeight: "200px",
                objectFit: "contain",
              }}
            />
          </Box>
        )}

        {/* Columna derecha: Formulario */}
        <Box flex={1.5} p={4}>
          <Typography variant="h4" fontWeight="bold" textAlign="center" color="#007BFF" mb={3}>
            Log in
          </Typography>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={LoginSchema}
            onSubmit={(values) => {
              console.log(values);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <Field
                  as={TextField}
                  label="Enter email"
                  name="email"
                  fullWidth
                  margin="normal"
                  error={touched.email && !!errors.email}
                  helperText={touched.email && errors.email}
                />
                <Field
                  as={TextField}
                  label="Enter password"
                  name="password"
                  type="password"
                  fullWidth
                  margin="normal"
                  error={touched.password && !!errors.password}
                  helperText={touched.password && errors.password}
                />
                <Box textAlign="center" mt={3}>
                  <ReCAPTCHA sitekey="6LdguIYqAAAAAMXgzsrEcP07aDusNqnO_FLnHtwc" />
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  sx={{
                    mt: 4,
                    bgcolor: "#FFD700",
                    color: "#003366",
                    "&:hover": { bgcolor: "#FFC107" },
                  }}
                >
                  Log in
                </Button>
                <Box textAlign="center" mt={3}>
                  <Typography variant="body2">
                    Don't have an account?{" "}
                    <Typography
                      component="span"
                      color="#007BFF"
                      sx={{ cursor: "pointer", fontWeight: "bold" }}
                      onClick={() => navigate("/signup")}
                    >
                      Register here
                    </Typography>
                  </Typography>
                  <Typography
                    variant="body2"
                    color="#007BFF"
                    sx={{ cursor: "pointer", fontWeight: "bold", mt: 2 }}
                    onClick={() => navigate("/forgot-password")}
                  >
                    Forgot password?
                  </Typography>
                </Box>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
