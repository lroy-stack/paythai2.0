import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          PayThai.io
        </Typography>
        <Button color="inherit" href="/login">Login</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
