import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { MenuList } from "../../Data/Data";

const Menu = () => {
  return (
    <Box
      sx={{
        width: 1400,
        mx: "auto",
        my: 15,
        "@media(max-width:600px)": {
          my: 5,
          justifyContent: "center",
          width: 300,
        },
      }}
    >
      <Grid container spacing={8}>
        {MenuList.map((menu) => (
          <Grid item key={menu} xs={12} sm={6} md={4} lg={3}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                sx={{ height: 140 }}
                image={menu.image}
                title="foods"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {menu.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {menu.description}
                </Typography>
                <Typography variant="body2" sx={{ pt: 1 }}>
                  Price: {menu.price} tk.
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
