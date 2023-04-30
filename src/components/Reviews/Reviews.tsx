import { Box, Container,  Grid } from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";
import reviews from "../../utils/reviews.json";

export const Reviews: React.FC = () => {
  return (
    <Box component="section" sx={{ pt: 4 }}>
      <Container>
        {reviews.length > 0 && (
          <Grid container spacing={2} sx={{ mr: "auto", ml: "auto" }}>
            {reviews.map((item) => (
              <Grid
                item
                key={item.id}
                md={4}
                sx={{ outline: "1px solid pink" }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <FaceIcon />
                  <p>{item.user}</p>
                </Box>

                <p>{item.review}</p>
              </Grid>
            ))}
          </Grid>
        )}
        <ul></ul>
      </Container>
    </Box>
  );
};
