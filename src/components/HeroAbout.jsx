import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-animation.json";

const HeroAbout = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(180deg, #F0F4FF 0%, #EAF4FF 100%)",
        minHeight: "85vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: { xs: 2, md: 6 },
        py: { xs: 2, md: 4 },
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        spacing={4}
        sx={{ maxWidth: "1200px", textAlign: { xs: "center", md: "left" } }}
      >
        {/* Columna Izquierda */}
        <Grid
          item
          xs={12}
          md={6}
          order={{ xs: 2, md: 1 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: { xs: "center", md: "flex-start" },
            height: "100%",
            px: { xs: 1, md: 4 },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              color: "#003366",
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              lineHeight: { xs: 1.2, md: 1.3 },
              mb: { xs: 2, md: 3 },
            }}
          >
            Empower Your Business with Crypto Solutions
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: "#6B7280",
              fontSize: { xs: "1rem", sm: "1.1rem", md: "1.25rem" },
              lineHeight: 1.6,
              mb: { xs: 3, md: 4 },
              maxWidth: { xs: "100%", sm: "80%", md: "450px" },
            }}
          >
            At PayThai, we simplify cryptocurrency payments for local businesses
            and tourists with fast, secure, and low-cost solutions.
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 2,
              width: "100%",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Button
              variant="contained"
              sx={{
                bgcolor: "#FFD700",
                color: "#003366",
                fontWeight: "bold",
                px: 4,
                py: 1,
                width: { xs: "100%", md: "auto" },
                borderRadius: "8px",
                "&:hover": { bgcolor: "#FFC107" },
              }}
            >
              Learn More
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: "#FFD700",
                color: "#003366",
                fontWeight: "bold",
                px: 4,
                py: 1,
                width: { xs: "100%", md: "auto" },
                borderRadius: "8px",
                "&:hover": { bgcolor: "#FFF3CD" },
              }}
            >
              Get Started
            </Button>
          </Box>
        </Grid>

        {/* Columna Derecha */}
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <Lottie
              animationData={heroAnimation} // Animación desde src
              loop
              style={{
                width: { xs: "70%", md: "100%" }, // Más pequeña en móviles
                maxWidth: "350px", // Ajuste para hacer más compacto
                height: "auto",
                margin: "0 auto",
              }}
            />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HeroAbout;
