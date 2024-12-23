import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#007BFF", // Azul principal
    },
    secondary: {
      main: "#FFD700", // Amarillo principal
    },
    text: {
      primary: "#000000", // Texto negro
      secondary: "#FFFFFF", // Texto blanco
    },
    background: {
      default: "#FFFFFF", // Fondo blanco
      paper: "#F5F5F5", // Fondo de papel
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  },
});

export default theme;
