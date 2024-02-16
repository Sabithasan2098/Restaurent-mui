import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";

const Contact = () => {
  return (
    <>
      <Box
        sx={{
          my: 10,
          mx: 4,
          "& h4": { fontWeight: "bold", mb: 2, color: "#FF6400" },
        }}
      >
        <Typography variant="h4">Contact My Restaurant</Typography>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Voluptatibus, fugiat laudantium nam beatae consequatur vitae quam esse
          laborum saepe ullam doloribus autem officiis, eos ducimus, asperiores
          et. Eos, quibusdam esse.
        </p>
      </Box>
      <Box
        sx={{
          width: 600,
          m: 4,
          "@media(max-width:600px)": { width: 340, m: 2 },
        }}
      >
        <TableContainer component={Paper}>
          <Table area-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ bgcolor: "black", color: "white" }}
                  align="center"
                >
                  Contact Details
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <SupportAgentIcon sx={{ color: "red" }} />
                  <p>0176768746857 (toll free)</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <EmailIcon sx={{ color: "skyblue" }} />
                  <p>restaurant@gmail.com</p>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <PhoneInTalkIcon sx={{ color: "blue" }} />
                  <p>0165464654</p>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Contact;
