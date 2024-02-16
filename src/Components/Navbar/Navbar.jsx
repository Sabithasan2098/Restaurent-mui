import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import logo from "../../images/logo.svg";

const Navbar = () => {
  const [mobileView, setMobileView] = useState(false);
  // open menu handler-->
  const handleOpenMenu = () => {
    setMobileView(!mobileView);
  };
  // menu drawer-->
  const drawer = (
    <Box onClick={handleOpenMenu} sx={{ width: 260 }}>
      <Typography
        variant="h5"
        component="div"
        sx={{ flexGrow: 1, color: "#FF6400", pl: 3, py: 2 }}
      >
        <img
          src={logo}
          alt=""
          style={{ color: "#FF6400", width: "100%", height: 60 }}
        />
      </Typography>{" "}
      <Divider />
      <ul className="mobile-view">
        <li>
          <NavLink to={"/"}>Home</NavLink>{" "}
        </li>
        <li>
          <NavLink to={"/menu"}>Menu</NavLink>
        </li>
        <li>
          <NavLink to={"/contact"}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={"/about"}>About</NavLink>
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
            <img src={logo} alt="" style={{ width: 250, height: 60 }} />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {" "}
            <ul className="navbar">
              <li>
                <NavLink activeClassName="active" to={"/"}>
                  Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink to={"/menu"}>Menu</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
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
