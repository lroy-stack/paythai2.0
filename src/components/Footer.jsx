import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box sx={{ backgroundColor: "primary.main", color: "white", py: 2, textAlign: "center" }}>
    <Typography variant="body2">
      &copy; {new Date().getFullYear()} PayThai.io. Todos los derechos reservados.
    </Typography>
  </Box>
);

export default Footer;
