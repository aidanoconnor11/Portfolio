// AppBarComponent.js
import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            color: "white",
            fontFamily: "Roboto", // Set to a serif font
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Aidan O'Connor
        </Typography>
        <nav>
          <Button color="inherit" component={Link} to="/">
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about">
            About
          </Button>
          <Button color="inherit" component={Link} to="/projects">
            Projects
          </Button>
          <Button color="inherit" component={Link} to="/experiences">
            Experiences
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Contact
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
