import { Box, Container } from "@mui/material";
import { SectionTitle } from "../common/common.styled";
import cloud from "../../static_images/cloudAdv.png";
import cloud1 from "../../static_images/cloudAdv2.png";
import cloud2 from "../../static_images/cloudAdv3.png";
import cloud3 from "../../static_images/3cloud.png";

export const Advantages: React.FC = () => {
  return (
    <Box component="section" sx={{ pt: 4 }}>
      <Container>
        <SectionTitle>Чому слід обрати саме мене?</SectionTitle>
        <img
          src={cloud}
          alt="cloud advantages"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <img
          src={cloud1}
          alt="cloud advantages"
          width={250}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <img
          src={cloud2}
          alt="cloud advantages"
          width={250}
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <img
          src={cloud3}
          alt="cloud advantages"
          width="250px"
          style={{ marginLeft: "auto", marginRight: "auto" }}
        />
        <p style={{ marginBottom: 12, marginTop: 12 }}>
          Я сертифікований мастер
        </p>
        <p> *(сертифікати)*</p>
        <ul>
          <li>1й</li>
          <li>2й</li>
          <li>...</li>
        </ul>
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
