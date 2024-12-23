import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

const ForgotPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
});

const ForgotPassword = () => {
  const [emailSent, setEmailSent] = useState(false);

  const handleFormSubmit = (values) => {
    console.log(values); // Aquí enviarías la solicitud al backend para el enlace de restablecimiento de contraseña.
    setEmailSent(true);
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bgcolor="#f9f9f9">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="80%"
        maxWidth="500px"
        bgcolor="white"
        borderRadius={4}
        boxShadow={3}
        p={4}
      >
        <Typography variant="h4" textAlign="center" mb={2} color="#1565C0">
          Forgot Password
        </Typography>
        {emailSent ? (
          <Typography variant="body1" textAlign="center" color="green">
            A password reset link has been sent to your email. Please check your inbox.
          </Typography>
        ) : (
          <>
            <Typography variant="body2" textAlign="center" mb={3} color="gray">
              Enter your registered email address, and we will send you a link to reset your password.
            </Typography>
            <Formik
              initialValues={{ email: "" }}
              validationSchema={ForgotPasswordSchema}
              onSubmit={handleFormSubmit}
            >
              {({ errors, touched }) => (
                <Form style={{ width: "100%" }}>
                  <Field
                    as={TextField}
                    label="Email Address"
                    name="email"
                    fullWidth
                    margin="normal"
                    error={touched.email && !!errors.email}
                    helperText={touched.email && errors.email}
                  />
                  <Box textAlign="center" mt={2}>
                    <ReCAPTCHA sitekey="6LdguIYqAAAAAMXgzsrEcP07aDusNqnO_FLnHtwc" />
                  </Box>
                  <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 3 }}>
                    Send Reset Link
                  </Button>
                </Form>
              )}
            </Formik>
            <Box textAlign="center" mt={3}>
              <Button color="primary" onClick={() => window.history.back()}>
                Back to Login
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
};

export default ForgotPassword;
