import { Box, Button, Container, Typography } from "@mui/material";
import centerPhoto from "../../static_images/master.png";

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
          <div>
            <p>мастер манікюру та педикюру</p>
            <Typography variant="h1" component='h1'>Ольга Бусова</Typography>
            <p>
              Познайомимося! Я скурпельозна запорізьа майстриня. Зроблю для тебе
              файні та неймовірні нігтики. В мене все стерильно та охайно.
              Максимально в дружелюбній та приємній атмосфері зроблю красу твоїм
              руцям та ніжкам. Чекаю в Заводському районі за адресою: вул.
              Добровольчих батальонів 54
            </p>
            <p>Посилання на сертифікати та навчання</p>
            <Button variant="contained">Записатися</Button>
          </div>
          <img src={centerPhoto} alt="Майстриня Ольга Бусова" width={380} />
        </Box>
      </Container>
    </Box>
  );
};
