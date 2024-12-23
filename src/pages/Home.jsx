import React from "react";
import { Container } from "@mui/material";
import HeroSection from "../components/HeroSection";
import FeaturesSection from "../components/FeaturesSection";
import HowItWorks from "../components/HowItWorks"; // Sección de cómo funciona
import PartnersSection from "../components/PartnersSection"; // Nueva sección de socios

const Home = () => (
  <Container
    maxWidth="lg"
    sx={{
      padding: 0, // Eliminamos padding extra para alinear las secciones
    }}
  >
    <HeroSection /> {/* Sección de encabezado */}
    <FeaturesSection /> {/* Sección de características */}
    <HowItWorks /> {/* Sección de cómo funciona */}
    <PartnersSection /> {/* Sección de socios añadida */}
  </Container>
);

export default Home;
