import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaWallet, FaQrcode, FaExchangeAlt } from "react-icons/fa";

const HowItWorksMobile = ({ steps }) => (
  <Swiper
    spaceBetween={16}
    slidesPerView={1}
    pagination={{ clickable: true }}
    modules={[Pagination]}
    style={{ paddingBottom: "2rem" }}
  >
    {steps.map((step, index) => (
      <SwiperSlide key={index}>
        <Box
          sx={{
            p: 3,
            bgcolor: "#FFFFFF",
            borderRadius: "16px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            mx: "auto",
            maxWidth: 320,
          }}
        >
          <Box
            sx={{
              mb: 3,
              display: "flex",
              justifyContent:
                index === 0
                  ? "flex-start" // Icono alineado a la izquierda
                  : index === 1
                  ? "center" // Icono centrado
                  : "flex-end", // Icono alineado a la derecha
              alignItems: "center",
              width: "100%", // Ocupar todo el ancho del bloque
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 80,
                bgcolor: "#007BFF",
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {step.icon}
            </Box>
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#003366", // Azul oscuro para el título
              mb: 2,
            }}
          >
            {step.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#6B7280", // Gris para el subtítulo
              lineHeight: 1.6,
            }}
          >
            {step.description}
          </Typography>
        </Box>
      </SwiperSlide>
    ))}
  </Swiper>
);


const HowItWorksDesktop = ({ steps }) => (
  <Grid container spacing={4} justifyContent="center">
    {steps.map((step, index) => (
      <Grid item xs={12} md={4} key={index}>
        <Box
          sx={{
            p: 4,
            bgcolor: "white",
            borderRadius: "16px",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
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
              bgcolor: "#007BFF",
              borderRadius: "50%",
            }}
          >
            {step.icon}
          </Box>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "#003366", // Azul oscuro para el título
              mb: 2,
            }}
          >
            {step.title}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#6B7280", // Gris para el subtítulo
              lineHeight: 1.6,
            }}
          >
            {step.description}
          </Typography>
        </Box>
      </Grid>
    ))}
  </Grid>
);

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaWallet size={50} color="#FFD700" />,
      title: "Set Up Your Wallet",
      description:
        "Connect your digital wallet to PayThai in just a few clicks.",
    },
    {
      icon: <FaQrcode size={50} color="#FFD700" />,
      title: "Receive Payments",
      description: "Accept payments in cryptocurrency using a simple QR code.",
    },
    {
      icon: <FaExchangeAlt size={50} color="#FFD700" />,
      title: "Convert to Thai Baht",
      description:
        "Easily exchange crypto for baht and transfer to your bank account.",
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
        How It Works
      </Typography>

      {/* Versión móvil */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <HowItWorksMobile steps={steps} />
      </Box>

      {/* Versión de escritorio */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <HowItWorksDesktop steps={steps} />
      </Box>
    </Box>
  );
};

export default HowItWorks;
