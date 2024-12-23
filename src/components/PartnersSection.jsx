import React from "react";
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material";

const PartnersSectionDesktop = ({ partners }) => (
  <Box
    sx={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: 4,
      maxWidth: "1200px",
      mx: "auto",
    }}
  >
    {partners.map((partner, index) => (
      <Box
        key={index}
        sx={{
          position: "relative",
          flex: partner.size === "large" ? "1 1 40%" : partner.size === "medium" ? "1 1 30%" : "1 1 20%",
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
        onClick={() => window.open(partner.url, "_blank")}
      >
        <Box
          component="img"
          src={partner.image}
          alt={partner.name}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
        <Button
          variant="outlined"
          sx={{
            position: "absolute",
            bottom: "16px",
            left: "16px",
            borderColor: "rgba(255, 255, 255, 0.8)",
            color: "rgba(255, 255, 255, 0.8)",
            fontWeight: "bold",
            px: 3,
            py: 1,
            borderRadius: "8px",
            backdropFilter: "blur(5px)",
            "&:hover": {
              borderColor: "#FFD700",
              color: "#FFD700",
              bgcolor: "rgba(255, 255, 255, 0.1)",
            },
          }}
        >
          Visit {partner.name}
        </Button>
      </Box>
    ))}
  </Box>
);

const PartnersSectionMobile = ({ partners }) => (
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)", // Dos columnas
      gap: 2,
      px: 2,
    }}
  >
    {partners.map((partner, index) => (
      <Box
        key={index}
        sx={{
          gridColumn: partner.size === "large" ? "span 2" : "span 1", // Tarjetas grandes ocupan dos columnas
          borderRadius: "16px",
          overflow: "hidden",
          boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
          cursor: "pointer",
          transition: "transform 0.3s ease",
          order: partner.name === "Bitkub" ? -1 : 0, // Bitkub siempre primero
          "&:hover": {
            transform: "scale(1.02)", // Efecto de hover
          },
        }}
        onClick={() => window.open(partner.url, "_blank")}
      >
        {/* Imagen del bloque */}
        <Box
          component="img"
          src={partner.image}
          alt={partner.name}
          sx={{
            width: "100%",
            height: "100%", // Ocupar completamente el bloque contenedor
            objectFit: "cover",
          }}
        />
      </Box>
    ))}
  </Box>
);


const PartnersSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const partners = [
    {
      image: "https://thewealthmastery.io/wp-content/uploads/2024/03/Coinbase.jpg",
      name: "Coinbase",
      desc: "User-friendly and popular for international users.",
      url: "https://www.coinbase.com",
      size: "medium",
    },
    {
      image: "https://www.lucid-trader.com/wp-content/uploads/2021/10/binance-logo.png",
      name: "Binance",
      desc: "The most trusted global exchange with advanced tools and an integrated wallet.",
      url: "https://www.binance.com",
      size: "medium",
    },
    {
      image: "https://nulltx.com/wp-content/uploads/2022/07/gate-io-cryptocurrency-exchange-review-nulltx.jpg",
      name: "Gate.io",
      desc: "Trade and manage your cryptocurrencies securely and easily on Gate.io.",
      url: "https://www.gate.io",
      size: "small",
    },
    {
      image: "https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/05b377b770422750cf0b40cbe462a255.jpg",
      name: "Bybit",
      desc: "Advanced trading tools for expert cryptocurrency traders.",
      url: "https://www.bybit.com",
      size: "small",
    },
    {
      image: "https://images.workpointtoday.com/workpointnews/2021/05/20205600/1621518944_38591_web_bizview3.jpg",
      name: "Bitkub",
      desc: "The leading platform in Thailand for cryptocurrency trading with an integrated wallet.",
      url: "https://www.bitkub.com",
      size: "large",
    },
  ];

  return (
    <Box
      sx={{
        py: 8,
        bgcolor: "linear-gradient(180deg, #EAF4FF 0%, #F9FAFB 100%)",
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          color: "#003366",
          textAlign: "center",
          mb: 6,
        }}
      >
        Our Trusted Partners
      </Typography>
      {isMobile ? (
        <PartnersSectionMobile partners={partners} />
      ) : (
        <PartnersSectionDesktop partners={partners} />
      )}
      <Box sx={{ textAlign: "center", mt: 6 }}>
        <Button
          variant="outlined"
          href="/partners"
          sx={{
            borderColor: "#FFD700",
            color: "#003366",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            "&:hover": {
              bgcolor: "#FFF3CD",
              borderColor: "#FFC107",
            },
          }}
        >
          See All Partners
        </Button>
      </Box>
    </Box>
  );
};

export default PartnersSection;
