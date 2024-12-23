import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Divider,
  ListItemIcon,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LanguageIcon from "@mui/icons-material/Language";
import LoginIcon from "@mui/icons-material/Login";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const [mobileMenuAnchorEl, setMobileMenuAnchorEl] = React.useState(null);
  const [languageMenuAnchorEl, setLanguageMenuAnchorEl] = React.useState(null);

  const handleMobileMenu = (event) => {
    setMobileMenuAnchorEl(event.currentTarget);
  };

  const closeMobileMenu = () => {
    setMobileMenuAnchorEl(null);
  };

  const handleLanguageMenu = (event) => {
    setLanguageMenuAnchorEl(event.currentTarget);
  };

  const closeLanguageMenu = () => {
    setLanguageMenuAnchorEl(null);
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    closeLanguageMenu();
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "primary.main",
        boxShadow: "none",
        borderBottom: "1px solid #e0e0e0",
      }}
    >
      <Toolbar>
        {/* Logo */}
        <Typography
          variant="h5"
          component="div"
          sx={{ fontWeight: "bold", cursor: "pointer", mr: 4 }}
          onClick={() => navigate("/")}
        >
          Pay<span style={{ color: "#FFD700" }}>Thai</span>
        </Typography>

        {/* Menú Hamburguesa para móviles */}
        <Box sx={{ display: { xs: "flex", md: "none" }, flexGrow: 1, justifyContent: "flex-end" }}>
          <IconButton color="inherit" onClick={handleMobileMenu}>
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={mobileMenuAnchorEl}
            open={Boolean(mobileMenuAnchorEl)}
            onClose={closeMobileMenu}
            PaperProps={{
              sx: {
                width: "90%",
                maxWidth: "300px",
                borderRadius: "12px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
              },
            }}
          >
            <MenuItem onClick={() => { navigate("/login"); closeMobileMenu(); }}>
              <Button
                startIcon={<LoginIcon />}
                variant="outlined"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  color: "#003366",
                  borderColor: "#FFD700",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  mb: 1,
                  "&:hover": { backgroundColor: "#FFF3CD" },
                }}
              >
                Log In
              </Button>
            </MenuItem>
            <MenuItem onClick={() => { navigate("/signup"); closeMobileMenu(); }}>
              <Button
                startIcon={<ArrowForwardIcon />}
                variant="contained"
                sx={{
                  width: "100%",
                  borderRadius: "8px",
                  backgroundColor: "#FFD700",
                  color: "#003366",
                  fontWeight: "bold",
                  textTransform: "capitalize",
                  "&:hover": { backgroundColor: "#FFC107" },
                }}
              >
                Sign Up
              </Button>
            </MenuItem>
            <Divider sx={{ my: 2 }} />
            <MenuItem onClick={() => { navigate("/about"); closeMobileMenu(); }}>
              <ListItemIcon>
                <InfoIcon fontSize="small" />
              </ListItemIcon>
              {t("about")}
            </MenuItem>
            <MenuItem onClick={() => { navigate("/contact"); closeMobileMenu(); }}>
              <ListItemIcon>
                <ContactMailIcon fontSize="small" />
              </ListItemIcon>
              {t("contact")}
            </MenuItem>
            <Divider sx={{ my: 2 }} />
            <MenuItem
              onClick={handleLanguageMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                px: 2,
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#FFF3CD" },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <LanguageIcon fontSize="small" />
                <Typography sx={{ fontWeight: "bold", color: "#003366" }}>
                  {i18n.language === "en" ? "English (EN)" : "ไทย (TH)"}
                </Typography>
              </Box>
              <ArrowForwardIcon sx={{ color: "#FFD700", fontSize: "small" }} />
            </MenuItem>
            <Menu
              anchorEl={languageMenuAnchorEl}
              open={Boolean(languageMenuAnchorEl)}
              onClose={closeLanguageMenu}
              PaperProps={{
                sx: {
                  borderRadius: "12px",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                  padding: 1,
                  width: "200px",
                },
              }}
            >
              {["en", "th"].map((lang) => (
                <MenuItem
                  key={lang}
                  onClick={() => changeLanguage(lang)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderRadius: "8px",
                    px: 2,
                    py: 1,
                    "&:hover": { backgroundColor: "#FFF3CD" },
                  }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      color: lang === i18n.language ? "#FFD700" : "#003366",
                    }}
                  >
                    {lang === "en" ? "English (EN)" : "ไทย (TH)"}
                  </Typography>
                  {lang === i18n.language && (
                    <CheckIcon sx={{ color: "#FFD700", fontSize: "small" }} />
                  )}
                </MenuItem>
              ))}
            </Menu>
          </Menu>
        </Box>

        {/* Botones de navegación para desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, flexGrow: 1 }}>
          <Button
            color="inherit"
            onClick={() => navigate("/about")}
            sx={{ fontWeight: "bold", textTransform: "capitalize", mr: 2 }}
          >
            {t("about")}
          </Button>
          <Button
            color="inherit"
            onClick={() => navigate("/contact")}
            sx={{ fontWeight: "bold", textTransform: "capitalize" }}
          >
            {t("contact")}
          </Button>
        </Box>

        {/* Acciones para desktop */}
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center", gap: 2 }}>
          <Button
            color="inherit"
            onClick={() => navigate("/login")}
            sx={{ textTransform: "capitalize", fontWeight: "bold" }}
          >
            {t("login")}
          </Button>
          <Button
            color="inherit"
            variant="outlined"
            sx={{
              borderColor: "white",
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </Button>
          {/* Selector de idioma */}
          <IconButton onClick={handleLanguageMenu} color="inherit">
            <LanguageIcon />
          </IconButton>
          <Menu
            anchorEl={languageMenuAnchorEl}
            open={Boolean(languageMenuAnchorEl)}
            onClose={closeLanguageMenu}
            PaperProps={{
              sx: {
                borderRadius: "8px",
                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                padding: 1,
              },
            }}
          >
            {["en", "th"].map((lang) => (
              <MenuItem
                key={lang}
                onClick={() => changeLanguage(lang)}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderRadius: "8px",
                  px: 2,
                  py: 1,
                  "&:hover": { backgroundColor: "#FFF3CD" },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    color: lang === i18n.language ? "#FFD700" : "#003366",
                  }}
                >
                  {lang === "en" ? "English (EN)" : "ไทย (TH)"}
                </Typography>
                {lang === i18n.language && (
                  <CheckIcon sx={{ color: "#FFD700", fontSize: "small" }} />
                )}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
