import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // Importamos el Link

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        justifyContent: "space-between",
        minHeight: "80vh",
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 0 },
        bgcolor: "linear-gradient(180deg, #F0F4FF 0%, #EAF4FF 100%)",
      }}
    >
      {/* Left Section: Texto y Botones */}
      <Box
        sx={{
          maxWidth: "600px",
          textAlign: { xs: "center", md: "left" },
          mb: { xs: 4, md: 0 },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            color: "#003366",
            fontSize: { xs: "2.5rem", md: "3.5rem" },
            mb: 3,
          }}
        >
          {t("hero.title")}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "#6B7280",
            lineHeight: { xs: 1.5, md: 1.8 },
            mb: 4,
            maxWidth: { xs: "100%", md: "90%" },
          }}
        >
          {t("hero.subtitle")}
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 2,
            alignItems: { xs: "center", md: "flex-start" },
            width: "100%",
          }}
        >
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: "#FFD700",
              color: "#003366",
              fontWeight: "bold",
              borderRadius: "8px",
              width: { xs: "100%", md: "auto" },
              "&:hover": { bgcolor: "#FFC107" },
            }}
          >
            {t("hero.button.start")}
          </Button>
          <Button
            component={Link} // Usamos Link como componente del botón
            to="/about" // Redirige a la página de About
            variant="outlined"
            size="large"
            sx={{
              borderColor: "#FFD700",
              color: "#003366",
              fontWeight: "bold",
              borderRadius: "8px",
              width: { xs: "100%", md: "auto" },
              "&:hover": { bgcolor: "#FFF3CD", borderColor: "#FFC107" },
            }}
          >
            {t("hero.button.learnMore")}
          </Button>
        </Box>
      </Box>

      {/* Right Section: Imagen */}
      <Box
        component="img"
        src="https://www.gifss.com/economia/bitcoin/images/bitcoin-06.gif"
        alt="Bitcoin Animation"
        sx={{
          width: { xs: "70%", md: "40%" },
          maxWidth: "350px",
          height: "auto",
          alignSelf: { xs: "center", md: "center" },
          transform: { md: "translateY(20px)" },
        }}
      />
    </Box>
  );
};

export default HeroSection;
