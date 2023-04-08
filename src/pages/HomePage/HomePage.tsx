import { Hero } from "../../components/Hero/Hero";
import { Advantages } from "../../components/Advantages/Advantages";
import { HomeSliderUseful } from "../../components/HomeSliderUseful/HomeSliderUseful";
import { Reviews } from "../../components/Reviews/Reviews";
import { Promotions } from "../../components/Promotions/Promotions";
import { Container } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <Advantages />
      <section>
        <Container>
          <h3>Улюблені гіфки до/після</h3>
        </Container>
      </section>
      <section>
        <Container>
          <h3>БЕЗПЕКА В КАРАНТИН</h3>
          <p>
            Ми дбаємо про твою безпеку, саме тому ми передбачили спеціальні
            заходи: 1. Безперервна дезінфекція повітря в салонах шляхом закритої
            безозонової рециркуляції. 2. Обов'язковий температурний скринінг
            усіх майстрів та клієнтів 3. Посилено оброблення всіх поверхонь, а
            також дотримання всіх норм, рекомендованих у постанові МОЗ України
            №20 від 9.05.2020 р.
          </p>
        </Container>
      </section>
      <HomeSliderUseful />
      <section>
        <Container>
          <b>Залишилися питання? Подзвони мені +380661292554 або напиши</b>
          <button>Написати Олі</button>
        </Container>
      </section>
      <Reviews />
      <Promotions />
    </main>
  );
};

export default HomePage;
