// AppBarComponent.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function NavBar() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: "black" }}>
      <Toolbar>
        <Typography
          variant="h4"
          component="div"
          sx={{
            flexGrow: 1,
            color: "white",
            fontFamily: "Roboto",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: "2px",
          }}
        >
          Aidan O'Connor
        </Typography>
        <nav>
          <Button
            color="inherit"
            component={Link}
            to="/"
            sx={{
              color: "white",
              "&:hover": {
                background: isActive("/")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              },
              background: isActive("/")
                ? "rgba(255, 255, 255, 0.2)"
                : "transparent",
              borderRadius: 0, // Remove button border-radius
              padding: "12px 16px", // Adjust padding for the entire area
            }}
          >
            Home
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{
              color: "white",
              "&:hover": {
                background: isActive("/about")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              },
              background: isActive("/about")
                ? "rgba(255, 255, 255, 0.2)"
                : "transparent",
              borderRadius: 0,
              padding: "12px 16px",
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            sx={{
              color: "white",
              "&:hover": {
                background: isActive("/projects")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              },
              background: isActive("/projects")
                ? "rgba(255, 255, 255, 0.2)"
                : "transparent",
              borderRadius: 0,
              padding: "12px 16px",
            }}
          >
            Projects
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/experiences"
            sx={{
              color: "white",
              "&:hover": {
                background: isActive("/experiences")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              },
              background: isActive("/experiences")
                ? "rgba(255, 255, 255, 0.2)"
                : "transparent",
              borderRadius: 0,
              padding: "12px 16px",
            }}
          >
            Experiences
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{
              color: "white",
              "&:hover": {
                background: isActive("/contact")
                  ? "rgba(255, 255, 255, 0.2)"
                  : "transparent",
              },
              background: isActive("/contact")
                ? "rgba(255, 255, 255, 0.2)"
                : "transparent",
              borderRadius: 0,
              padding: "12px 16px",
            }}
          >
            Contact
          </Button>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
