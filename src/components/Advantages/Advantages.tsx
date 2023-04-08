import { Box, Container, Typography } from "@mui/material";

export const Advantages: React.FC = () => {
  return (
    <Box component="section" sx={{ pt: 4}}>
      <Container>
        <Typography variant="h4" component='h4'>
          Переваги у вигляді таблиці "Чому обрати саме мене" (можна з векторними
          картинками або имдж)
        </Typography>
      </Container>
    </Box>
  );
};
