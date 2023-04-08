import { Box, Container, Typography } from "@mui/material";

export const HomeSliderUseful: React.FC = () => {
  return (
    <Box component="section" sx={{ pt: 4 }}>
      <Container>
        <Typography variant="h4" component="h4">
          Слайдер з картками-посиланнями на корисне
        </Typography>
      </Container>
    </Box>
  );
};
