import { Box, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          textAlign: "center",
          color: "white",
          p: 3,
          "@media (min-width:600px)": {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "row-reverse",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 4,
            cursor: "pointer",
            "@media (max-width:600px)": { justifyContent: "center", mb: 2 },
          }}
        >
          <InstagramIcon />
          <TwitterIcon />
          <LinkedInIcon />
        </Box>
        <Typography
          variant="h5"
          sx={{ "@media (max-width:600px)": { fontSize: 16 } }}
        >
          All right reserved @copy; My Restaurant
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
