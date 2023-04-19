import { Box, Button, Container } from "@mui/material";
import centerPhoto from "../../static_images/master.png";
import { OverTitle, MainTitle, DescriptionHero, Address } from "./Hero.styled";
import { LocationOn } from "@mui/icons-material";
// import { Container } from "../common/Container.styled";

export const Hero: React.FC = () => {
  return (
    <Box component="section" sx={{ pt: 4 }}>
      <Container>
        <Box
          sx={{
            backgroundColor: "primary",
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{padding:10}}>
            <OverTitle>Майстер манікюру та педикюру</OverTitle>
            <MainTitle>Ольга Бусова</MainTitle>
            <DescriptionHero>
              Познайомимося! Я скурпельозна запорізька майстриня. Зроблю для
              тебе файні та неймовірні нігтики. В мене все стерильно та охайно.
              Максимально в дружелюбній та приємній атмосфері зроблю красу твоїм
              руцям та ніжкам. Чекаю в Заводському районі за адресою:
            </DescriptionHero>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent:'space-between',
              }}
            >
              <div>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LocationOn />
                  <Address>вул. Добровольчих батальонів 54</Address>
                </Box>
                <p style={{ marginBottom: 12, marginTop: 12 }}>
                  Посилання на сертифікати та навчання
                </p>
              </div>
              <Button variant="contained" color="secondary" sx={{
                mr:12, borderRadius: 40
              }}>
                Записатися
              </Button>
            </Box>
          </div>
          <img src={centerPhoto} alt="Майстриня Ольга Бусова" width={380} />
        </Box>
      </Container>
    </Box>
  );
};
