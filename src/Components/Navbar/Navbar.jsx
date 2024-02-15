import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import { Link } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  // open menu handler-->
  const handleOpenMenu = () => {
    setMobileView(!mobileView);
  };
  // menu drawer-->
  const drawer = (
    <Box onClick={handleOpenMenu} sx={{ p: 4 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, color: "#FF6400" }}
      >
        <FastfoodIcon />
        <span style={{ fontWeight: "bold" }}> My Restaurant</span>
      </Typography>{" "}
      <ul className="mobile-view">
        <li>
          <Link to={"/"}>Home</Link>{" "}
        </li>
        <li>
          <Link to={"/menu"}>Menu</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
      </ul>
    </Box>
  );

  return (
    <Box>
      <AppBar
        component={"nav"}
        sx={{
          bgcolor: "white",
          color: "black",
          position: "static",
          borderBottom: "1px solid black",
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            sx={{ display: { sm: "none" }, mr: 2 }}
            onClick={handleOpenMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            component="div"
            sx={{ flexGrow: 1, color: "#FF6400" }}
          >
            <FastfoodIcon />
            <span style={{ fontWeight: "bold" }}> My Restaurant</span>
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {" "}
            <ul className="navbar">
              <li>
                <Link to={"/"}>Home</Link>{" "}
              </li>
              <li>
                <Link to={"/menu"}>Menu</Link>
              </li>
              <li>
                <Link to={"/contact"}>Contact</Link>
              </li>
              <li>
                <Link to={"/about"}>About</Link>
              </li>
            </ul>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component={"nav"}>
        <Drawer
          variant="temporary"
          open={mobileView}
          onClose={handleOpenMenu}
          sx={{ display: { xs: "block", sm: "none" } }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Navbar;
