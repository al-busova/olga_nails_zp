import { Box, Container } from "@mui/material";
import { SectionTitle } from "../common/common.styled";
import cloud from "../../static_images/cloudAdv.png";

export const Advantages: React.FC = () => {
  return (
    <Box component="section" sx={{ pt: 4 }}>
      <Container>
        <SectionTitle>Чому слід обрати саме мене?</SectionTitle>
        <img src={cloud} alt="cloud advantages" />
          <p style={{ marginBottom: 12, marginTop: 12 }}>
                  Посилання на сертифікати та навчання
                </p>
      </Container>
    </Box>
  );
};

// <Grid container spacing={2}>
//   <Grid item md={6} sx={{ textAlign: "center" }}>
//     <AdvantageItem>
//      Стерильно та комфортно
//     </AdvantageItem>
//   </Grid>
//   <Grid item md={6} sx={{ textAlign: "center" }}>
//     <AdvantageItem>Якісно</AdvantageItem>
//   </Grid>
//     <Grid item md={6} sx={{ textAlign: "center" }}>
//     <AdvantageItem>Красиво</AdvantageItem>
//     {/* <img src={hand30} alt="hand30" width={200}/> */}
//   </Grid>
//   <Grid item md={6} sx={{ textAlign: "center" }}>
//     <AdvantageItem>Дружелюбно</AdvantageItem>
//   </Grid>
// </Grid>
