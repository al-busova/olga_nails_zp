import { Box, Container, Button} from "@mui/material";
import collageFormHome from "../../static_images/collageFormHome.jpg";
import { FormSimple, InputStyled, LabelStyled  } from "./FormHome.styled";

export const FormHome: React.FC = () => {
  return (
      <Box
        component="section"
        sx={{ pt: 4, pb: 4, backgroundColor: "#d7537a" }}
      >
        <Container>
          <Box sx={{ display: "flex", gap: 2, alignItems:'center' }}>
            <img src={collageFormHome} alt="collage" width={500} />
            <div style={{width:'100%'}}>
              <FormSimple>
                <b>Є питання?</b>
                <p>Залишіть заявку та я зв'яжуся з Вами!</p>
                <LabelStyled  htmlFor="name">
                  Ваше ім'я:
                  <InputStyled type="text" id="name" name="name" placeholder="Ольга"/>
                </LabelStyled>
                <LabelStyled  htmlFor="tel">
                  Ваш телефон:
                  <InputStyled type="tel" id="tel" name="tel" placeholder="+380667722111"/>
                </LabelStyled>
                <Button variant="outlined"  sx={{ borderRadius: 40, color:'white', borderColor:'white'
              }}>
                Залишити заявку
              </Button>
              </FormSimple>
              {/*  Подзвони мені +380661292554 або напиши <button>Написати Олі</button> */}
            </div>
          </Box>
        </Container>
      </Box>
  );
};
