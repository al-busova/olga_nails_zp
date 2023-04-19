import { Hero } from "../../components/Hero/Hero";
import { Advantages } from "../../components/Advantages/Advantages";
import { HomeGifs } from "../../components/HomeGifs/HomeGifs";
import { HomeSliderUseful } from "../../components/HomeSliderUseful/HomeSliderUseful";
import { Reviews } from "../../components/Reviews/Reviews";
import { Promotions } from "../../components/Promotions/Promotions";
import { Box, Container } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Advantages />
      <HomeGifs />
      <HomeSliderUseful />
      <Box component="section" sx={{ pt: 4 }}>
        <Container>
          <b>Залишилися питання? Подзвони мені +380661292554 або напиши</b>
          <button>Написати Олі</button>
        </Container>
      </Box>
      <Reviews />
      <Promotions />
    </main>
  );
};

export default HomePage;
