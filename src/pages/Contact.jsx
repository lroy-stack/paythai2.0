// src/pages/Contact.jsx
import React from "react";
import { Container, Typography, TextField, Button, Box } from "@mui/material";

const Contact = () => (
  <Container sx={{ mt: 4 }}>
    <Typography variant="h4" component="h1" gutterBottom>
      Contáctanos
    </Typography>
    <Typography variant="body1" paragraph>
      ¿Tienes alguna pregunta o necesitas más información? Completa el formulario
      a continuación y nos pondremos en contacto contigo.
    </Typography>
    <Box component="form" sx={{ mt: 2 }}>
      <TextField
        fullWidth
        label="Nombre"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Correo Electrónico"
        variant="outlined"
        margin="normal"
      />
      <TextField
        fullWidth
        label="Mensaje"
        variant="outlined"
        margin="normal"
        multiline
        rows={4}
      />
      <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
        Enviar
      </Button>
    </Box>
  </Container>
);

export default Contact;
