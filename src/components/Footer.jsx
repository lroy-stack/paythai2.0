import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box
    sx={{
      backgroundColor: "primary.main",
      color: "white",
      py: 3,
      textAlign: "center",
      mt: 4,
    }}
  >
    <Typography variant="body2" sx={{ mb: 1 }}>
      © {new Date().getFullYear()} PayThai.io - Todos los derechos reservados.
    </Typography>
    <Typography variant="body2">
      Made with ❤️ for seamless crypto payments.
    </Typography>
  </Box>
);

export default Footer;
