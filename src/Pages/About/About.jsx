import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Box
      textAlign={"center"}
      sx={{ my: 14, mx: 5, "@media(max-width:600px)": { my: 2, mx: 1 } }}
    >
      <Typography
        color="#FF6400"
        mb="2"
        variant="h5"
        sx={{ fontWeight: "bold" }}
      >
        Welcome to my restaurant
      </Typography>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sit illo
        temporibus veritatis harum molestias est animi qui eveniet eos itaque
        quibusdam accusamus aspernatur hic nobis, suscipit quidem soluta labore
        maxime velit adipisci. Dicta nostrum neque cum quam facere
        necessitatibus suscipit excepturi aliquam, deserunt quidem quo earum
        nemo quibusdam nam ad animi? Eligendi nobis, explicabo facilis
        laudantium quaerat fugit ipsam unde qui consequuntur modi repudiandae.
        Maiores debitis quidem, perferendis ullam praesentium recusandae
        repudiandae nam molestias culpa et voluptatibus veniam, asperiores quasi
        quo? Est magnam molestias dolorem magni dignissimos itaque minima quam
        possimus accusantium quasi placeat, eius quaerat nihil doloribus nobis.
      </p>{" "}
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit quidem
        sapiente ad, quaerat delectus iste quasi est inventore repudiandae quae
        magnam nulla numquam. Eius ab corrupti doloremque incidunt? Culpa veniam
        eaque nulla rerum provident officia ad, corrupti sunt harum sequi
        molestias aspernatur voluptas itaque, incidunt dolor mollitia
        repellendus error laborum at. Labore sapiente maiores excepturi
        cupiditate maxime, iusto ipsum, velit eligendi fuga deleniti
        accusantium! Dicta, cum. Illo autem cum qui magni perferendis. Dicta
        eligendi error ipsa, ipsam blanditiis ducimus debitis sapiente
        doloremque laboriosam molestiae quia odio mollitia excepturi, officiis
        numquam architecto aperiam, incidunt odit tempora distinctio
        voluptatibus! Quasi, dicta quis.
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt culpa
        ipsam, molestias ut inventore voluptas aut accusantium blanditiis sequi
        fugiat recusandae porro qui harum, veniam voluptate non veritatis ad
        nemo, est in. Modi voluptates sint adipisci? Cupiditate reprehenderit
        reiciendis error explicabo vitae nostrum perspiciatis unde obcaecati.
        Similique ipsam sit hic quam corrupti nulla dolorum aliquam, assumenda
        voluptas, molestias delectus aperiam saepe id! Ab nihil odio ipsa porro
        blanditiis hic at voluptatibus, placeat autem illo sit.
      </p>
      <br />
      <Typography
        color="#FF6400"
        mt="2"
        variant="h5"
        sx={{ fontWeight: "bold" }}
      >
        Enjoy the food
      </Typography>
    </Box>
  );
};

export default About;
