import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Box } from "@mui/material";

const Root = () => {
  return (
    <div>
      <Box sx={{ minHeight: "92vh", position: "relative" }}>
        <Navbar></Navbar>
        <Outlet></Outlet>
      </Box>

      <Footer></Footer>
    </div>
  );
};

export default Root;
