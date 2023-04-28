import { Box, Container,  Grid } from "@mui/material";
import { AdvantageItem } from "./Advantages.styled";
import { SectionTitle } from "../common/common.styled";
// import hand30 from '../../static_images/hand_30.webp';

export const Advantages: React.FC = () => {
  return (
    <Box component="section" sx={{ pt: 4 }}>
      <Container>
        <SectionTitle>
          Чому слід обрати мене?
        </SectionTitle>
        <Grid container spacing={2}>
          <Grid item md={6} sx={{ textAlign: "center" }}>
            <AdvantageItem>
             Стерильно та комфортно
            </AdvantageItem>
          </Grid>
          <Grid item md={6} sx={{ textAlign: "center" }}>
            <AdvantageItem>Якісно</AdvantageItem>
          </Grid>
            <Grid item md={6} sx={{ textAlign: "center" }}>
            <AdvantageItem>Красиво</AdvantageItem>
            {/* <img src={hand30} alt="hand30" width={200}/> */}
          </Grid>
          <Grid item md={6} sx={{ textAlign: "center" }}>
            <AdvantageItem>Дружелюбно</AdvantageItem>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
