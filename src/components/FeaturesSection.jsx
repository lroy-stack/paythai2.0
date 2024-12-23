import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Player } from "@lottiefiles/react-lottie-player";
import "swiper/css";
import "swiper/css/pagination";

// Importa las animaciones desde la carpeta correcta
import problemAnimation from "../assets/problem.orangine.json";
import lightningAnimation from "../assets/lightning.yellow.icon.json";
import lockAnimation from "../assets/orange.loock.json";

const FeaturesSectionMobile = ({ features }) => (
  <Swiper
    spaceBetween={20}
    slidesPerView={1}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    style={{ paddingBottom: "2rem" }}
  >
    {features.map((feature, index) => (
      <SwiperSlide key={index}>
        <Box
          sx={{
            p: 4,
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: 350,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              mb: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 80,
              height: 80,
              bgcolor: "#FFF9E5",
              borderRadius: "50%",
            }}
          >
            <Player
              autoplay
              loop
              src={feature.animation}
              style={{ width: 60, height: 60 }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#003366",
              mb: 2,
            }}
          >
            {feature.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#6B7280",
              lineHeight: 1.6,
            }}
          >
            {feature.desc}
          </Typography>
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
);

const FeaturesSectionDesktop = ({ features }) => (
  <Grid container spacing={4} justifyContent="center">
    {features.map((feature, index) => (
      <Grid item xs={12} md={4} key={index}>
        <Box
          sx={{
            p: 4,
            bgcolor: "white",
            borderRadius: "12px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              mb: 3,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 80,
              height: 80,
              bgcolor: "#FFF9E5",
              borderRadius: "50%",
            }}
          >
            <Player
              autoplay
              loop
              src={feature.animation}
              style={{ width: 60, height: 60 }}
            />
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#003366",
              mb: 2,
            }}
          >
            {feature.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#6B7280",
              lineHeight: 1.6,
            }}
          >
            {feature.desc}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

const FeaturesSection = () => {
  const features = [
    {
      animation: problemAnimation, // Animación JSON
      title: "The Problem Today",
      desc: "High transaction fees, slow processing times, and technical complexity make payments inefficient for businesses and customers.",
    },
    {
      animation: lightningAnimation,
      title: "Our Solution",
      desc: "We simplify payments with blockchain technology, ensuring fast, secure, and cost-effective transactions for everyone.",
    },
    {
      animation: lockAnimation,
      title: "Future Transformation",
      desc: "Transforming how businesses and customers interact with cryptocurrency payments globally.",
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: "#F9FAFB",
        py: 8,
        px: { xs: 2, md: 6 },
        textAlign: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#003366",
          textAlign: "center",
          mb: 6,
          position: "relative",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: "-8px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "50px",
            height: "3px",
            bgcolor: "#FFD700",
          },
        }}
      >
        Why PayThai?
      </Typography>

      {/* Versión móvil */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <FeaturesSectionMobile features={features} />
      </Box>

      {/* Versión de escritorio */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <FeaturesSectionDesktop features={features} />
      </Box>
    </Box>
  );
};

export default FeaturesSection;
