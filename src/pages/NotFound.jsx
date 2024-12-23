import React from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "../assets/err.404.json";

const NotFound = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Detectar si es pantalla móvil o tablet

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: isMobile ? "center" : "left",
        bgcolor: "#F9FAFB",
        px: 3,
      }}
    >
      {/* Columna izquierda: Animación */}
      <Box
        sx={{
          flex: isMobile ? "none" : 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mb: isMobile ? 4 : 0,
        }}
      >
        <Box
          sx={{
            width: isMobile ? "250px" : "350px",
            height: isMobile ? "250px" : "350px",
          }}
        >
          <Lottie animationData={animationData} loop={true} />
        </Box>
      </Box>

      {/* Columna derecha: Texto y botón */}
      <Box
        sx={{
          flex: isMobile ? "none" : 1,
          display: "flex",
          flexDirection: "column",
          alignItems: isMobile ? "center" : "flex-start",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "bold",
            fontSize: isMobile ? "64px" : "96px",
            color: "#003366",
            mb: 2,
          }}
        >
          404
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: "#6B7280",
            mb: 4,
          }}
        >
          Oops! The page you’re looking for doesn’t exist.
        </Typography>
        <Button
          variant="contained"
          sx={{
            bgcolor: "#FFD700",
            color: "#003366",
            fontWeight: "bold",
            "&:hover": { bgcolor: "#FFC107" },
          }}
          onClick={() => navigate("/")}
        >
          Go Back Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;
